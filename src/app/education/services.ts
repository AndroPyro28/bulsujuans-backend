import prisma from "../../lib/prisma";
import { TStoreEducationSchema, TUpdateEducationSchema } from "./schema";

class EducationService {
  constructor() {}

  public async getEducationOptions() {
    return await prisma.education.findMany({
      where: {
        deleted_at: null,
      },
      orderBy: {
        year: "asc",
      },
      select: {
        id: true,
        degree: true,
      },
    });
  }

  public async getEducations(search: string, limit: number, offset: number, user_id?: string) {
    return await prisma.education.findMany({
      where: {
        OR: [{ degree: { contains: search } }, { description: { contains: search } }],
        userId: user_id,
        deleted_at: null,
      },
      orderBy: {
        createdAt: "asc",
      },
      take: limit,
      skip: offset,
    });
  }

  public async getEducationsTotal(search: string, user_id?: string) {
    return await prisma.education.count({
      where: {
        OR: [{ degree: { contains: search } }, { description: { contains: search } }],
        userId: user_id,
        deleted_at: null,
      },
    });
  }

  public async getEducationById(id: string) {
    return await prisma.education.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  // public async getEducationByName(name: string) {
  //   return await prisma.education.findFirst({
  //     where: {
  //       degree: {
  //         equals: name,
  //       },
  //       deleted_at: null,
  //     },
  //   });
  // }

  public async createEducation(data: TStoreEducationSchema) {
    return await prisma.education.create({
      data: data,
    });
  }

  public async updateEducation(id: string, data: TUpdateEducationSchema) {
    return await prisma.education.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteEducation(id: string) {
    return await prisma.education.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default EducationService;
