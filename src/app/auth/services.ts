import prisma from "../../lib/prisma";
import { Prisma } from "@prisma/client";
class Authhervice {
  constructor() {}

  public findByEmail = async (email: string) => {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        credential: true,
        role: true,
      },
    });
  };

  public findByStudentId = async (studentId: string) => {
    return await prisma.credential.findUnique({
      where: {
        student_id: studentId,
      },
      include: {
        user: true,
      },
    });
  };

  public updateCredentials = async (email: string, data: Partial<Prisma.CredentialCreateInput>) => {
    return await prisma.credential.update({
      where: {
        email: email,
      },
      data,
    });
  };
}

export default Authhervice;
