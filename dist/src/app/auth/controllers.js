"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../lib/config"));
const services_1 = __importDefault(require("./services"));
const jwt_1 = require("../../lib/jwt");
const fs_1 = __importDefault(require("fs"));
const smtp_1 = __importDefault(require("../../lib/smtp"));
const handlebars_1 = __importDefault(require("handlebars"));
const utils_1 = require("../../lib/utils");
const http_status_codes_1 = require("http-status-codes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const services_2 = __importDefault(require("../roles/services"));
class AuthController {
    constructor() {
        this.authService = new services_1.default();
        this.roleService = new services_2.default();
        this.login = async (req, res) => {
            try {
                const body = req.body;
                if (body.type === "request-otp") {
                    const { email } = body;
                    const user = await this.authService.findByEmail(email);
                    if (!user || !user.id) {
                        throw new utils_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, "User Not Found");
                    }
                    const otp = (0, jwt_1.generateOtp)();
                    const jwtToken = await (0, jwt_1.generateJwtToken)({
                        userId: user.id,
                        email: user?.email,
                        otp: otp,
                        jwtSecret: config_1.default.JWT_SECRET,
                    });
                    await this.authService.updateCredentials(user.credential.email, {
                        access_token: jwtToken,
                    });
                    const sourcePath = `${__dirname}/../../../public/email-templates/request-otp.html`;
                    const sourceTemplate = fs_1.default.readFileSync(sourcePath, "utf-8").toString();
                    const template = handlebars_1.default.compile(sourceTemplate);
                    const replacement = {
                        firstName: user?.first_name,
                        otp,
                    };
                    const requestOtpContent = template(replacement);
                    (0, smtp_1.default)({
                        content: requestOtpContent,
                        subject: "One Time Password",
                        emailTo: user?.email,
                    });
                    return res.status(200).json({
                        success: true,
                    });
                }
                if (body.type === "verify-otp") {
                    const { email, otp, type } = body;
                    const user = await this.authService.findByEmail(email);
                    if (!user || !user.id) {
                        throw new utils_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, "User Not Found");
                    }
                    const jwt = (0, jwt_1.decodeJwtToken)(user.credential.access_token, config_1.default.JWT_SECRET);
                    if (!jwt) {
                        throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Your OTP has been expired. Please request a new one.");
                    }
                    if (user.email !== jwt.email) {
                        throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid Credentials");
                    }
                    const isOtpMatched = await bcrypt_1.default.compare(otp, jwt.otp);
                    if (!isOtpMatched) {
                        throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid OTP. Please try again");
                    }
                    const payload = {
                        userId: user.id,
                        email: user.email,
                    };
                    const [accessToken, refreshToken] = await Promise.all([
                        (0, jwt_1.generateUserToken)({
                            ...payload,
                            expiresIn: "1d",
                            jwtSecret: config_1.default.JWT_SECRET,
                        }),
                        (0, jwt_1.generateUserToken)({
                            ...payload,
                            expiresIn: "7d",
                            jwtSecret: config_1.default.JWT_REFRESH_SECRET,
                        }),
                    ]);
                    await this.authService.updateCredentials(user.credential.email, {
                        access_token: accessToken,
                        refresh_token: refreshToken,
                    });
                    const permission = await this.roleService.getUserAccess(user.email);
                    const permissionCodes = permission.map((p) => p.code);
                    return res.status(http_status_codes_1.StatusCodes.OK).json({
                        auth: {
                            id: user.id,
                            name: user.first_name,
                            role: user.role?.name,
                            email: user.email,
                            permissions: permissionCodes,
                        },
                        tokens: {
                            accessToken,
                            refreshToken,
                        },
                        success: true,
                    });
                }
            }
            catch (error) {
                throw error;
            }
        };
        this.register = async (req, res) => {
            try {
                // const response = await this.authService.register(req.body);
                return res.status(201).json({});
            }
            catch (error) {
                console.log(error);
                return res.status(400).json({ message: "something went wrong..." });
            }
        };
        this.refresh = async (req, res) => {
            try {
                const userAuth = req.user;
                const user = await this.authService.findByEmail(userAuth?.email);
                if (!user || !user.id) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, "User Not Found");
                }
                const payload = {
                    userId: user.id,
                    email: user.email,
                    studentId: user.student_id,
                };
                const [accessToken, refreshToken] = await Promise.all([
                    (0, jwt_1.generateUserToken)({
                        ...payload,
                        expiresIn: "1d",
                        jwtSecret: config_1.default.JWT_SECRET,
                    }),
                    (0, jwt_1.generateUserToken)({
                        ...payload,
                        expiresIn: "7d",
                        jwtSecret: config_1.default.JWT_REFRESH_SECRET,
                    }),
                ]);
                await this.authService.updateCredentials(user.credential.email, {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                });
                const permission = await this.roleService.getUserAccess(user.email);
                const permissionCodes = permission.map((p) => p.code);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    auth: {
                        id: user.id,
                        name: user.first_name,
                        role: user.role?.name,
                        email: user.email,
                        permissions: permissionCodes,
                    },
                    tokens: {
                        accessToken,
                        refreshToken,
                    },
                    success: true,
                });
            }
            catch (error) {
                console.log(error);
                return res.status(400).json({ message: "something went wrong..." });
            }
        };
    }
}
exports.default = AuthController;
