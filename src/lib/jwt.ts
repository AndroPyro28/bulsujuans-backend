import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const hash = async (value: string) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(value, saltRounds);
  return hash;
};

export const compare = async (rawValue: string, hashedValue: string) => {
  return await bcrypt.compare(rawValue, hashedValue);
};

interface GenerateJwtTokenParams {
  email: string;
  studentId: string;
  otp: string;
  jwtSecret: string;
}

export const generateJwtToken = async ({
  email,
  studentId,
  otp,
  jwtSecret,
}: GenerateJwtTokenParams): Promise<string> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedOtp = await bcrypt.hash(otp, salt);
  const payload = {
    email,
    studentId,
    otp: hashedOtp,
  };

  return jwt.sign(payload, jwtSecret, { expiresIn: "5m" }); // optional expiration
};

interface DecodedToken {
  email: string;
  studentId: string;
  otp: string;
  iat?: number;
  exp?: number;
}

export const decodeJwtToken = (token: string, jwtSecret: string): DecodedToken | null => {
  try {
    const decoded = jwt.verify(token, jwtSecret) as DecodedToken;
    return decoded;
  } catch (error) {
    console.error("Invalid or expired token:", error);
    return null;
  }
};


interface GenerateUserTokenParams {
  id: string;
  email: string;
  studentId: string;
  jwtSecret: string;
  expiresIn: "15m" | "1d"; // access token and refresh token
}

export const generateUserToken = async ({
  id,
  email,
  studentId,
  jwtSecret,
  expiresIn,
}: GenerateUserTokenParams): Promise<string> => {
  const payload = {
    id,
    email,
    studentId,
  }
  return jwt.sign(payload, jwtSecret, { expiresIn }); // optional expiration
};