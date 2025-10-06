export type JWT = {
  email: string;
  studentId: string;
  otp: string;
  iat?: number;
  exp?: number;
};

declare module "express-serve-static-core" {
  interface Request {
    user?: JWT;
  }
}
