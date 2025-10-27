import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;

export function parseEnumParam<T extends Record<string, string>>(value: any, enumObj: T): T[keyof T] | undefined {
  return Object.values(enumObj).includes(value as T[keyof T]) ? (value as T[keyof T]) : undefined;
}
