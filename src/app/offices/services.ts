import { OfficeType } from "@prisma/client";
import prisma from "../../lib/prisma";
import { TStoreOfficeSchema, TUpdateOfficeSchema } from "./schema";

class OfficeService {
  constructor() {}

  public async getOfficeOptions() {
    return await prisma.office.findMany({
      where: {
        deleted_at: null,
      },
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  public async getOffices(search: string, limit: number, offset: number, office_type?: OfficeType) {
    return await prisma.office.findMany({
      where: {
        OR: [{ name: { contains: search } }, { desc: { contains: search } }],
        type: office_type,
        deleted_at: null,
      },
      orderBy: {
        name: "asc",
      },
      take: limit,
      skip: offset,
    });
  }

  public async getOfficesTotal(search: string, office_type?: OfficeType) {
    return await prisma.office.count({
      where: {
        OR: [{ name: { contains: search } }, { desc: { contains: search } }],
        type: office_type,
        deleted_at: null,
      },
    });
  }

  public async getOfficeById(id: string) {
    return await prisma.office.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  public async getOfficeByName(name: string) {
    return await prisma.office.findFirst({
      where: {
        name: {
          equals: name,
        },
        deleted_at: null,
      },
    });
  }

  public async createOffice(data: TStoreOfficeSchema) {
    return await prisma.office.create({
      data: data,
    });
  }

  public async updateOffice(id: string, data: TUpdateOfficeSchema) {
    return await prisma.office.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteOffice(id: string) {
    return await prisma.office.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default OfficeService;
