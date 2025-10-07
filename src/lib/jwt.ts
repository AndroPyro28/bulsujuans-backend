import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
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
