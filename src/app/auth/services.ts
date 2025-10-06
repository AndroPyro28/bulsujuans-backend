import prisma from "../../lib/prisma";

class Authhervice {
  constructor() {}

  public findByEmail = async (email: string) => {
    return await prisma.user.findUnique({
      where: {
        email: email,
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

  public updateCredentials = async (
    studentId: string,
    data: {
      access_token: string;
    }
  ) => {
    return await prisma.credential.update({
      where: {
        student_id: studentId,
      },
      data,
    });
  };
}

export default Authhervice;
