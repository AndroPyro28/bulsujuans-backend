import prisma from "../../lib/prisma";
import { TStoreExperienceSchema, TUpdateExperienceSchema } from "./schema";

class ExperienceService {
  constructor() {}

  public async getExperienceOptions() {
    return await prisma.experience.findMany({
      where: {
        deleted_at: null,
      },
      orderBy: {
        start_year: "asc",
      },
      select: {
        id: true,
        title: true,
      },
    });
  }

  public async getExperiences(search: string, limit: number, offset: number, user_id?: string) {
    return await prisma.experience.findMany({
      where: {
        OR: [{ title: { contains: search } }, { company: { contains: search } }, { description: { contains: search } }],
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

  public async getExperiencesTotal(search: string, user_id?: string) {
    return await prisma.experience.count({
      where: {
        OR: [{ title: { contains: search } }, { company: { contains: search } }, { description: { contains: search } }],
        userId: user_id,
        deleted_at: null,
      },
    });
  }

  public async getExperienceById(id: string) {
    return await prisma.experience.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  // public async getExperienceByName(name: string) {
  //   return await prisma.experience.findFirst({
  //     where: {
  //       title: {
  //         equals: name,
  //       },
  //       deleted_at: null,
  //     },
  //   });
  // }

  public async createExperience(data: TStoreExperienceSchema) {
    return await prisma.experience.create({
      data: data,
    });
  }

  public async updateExperience(id: string, data: TUpdateExperienceSchema) {
    return await prisma.experience.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteExperience(id: string) {
    return await prisma.experience.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default ExperienceService;
