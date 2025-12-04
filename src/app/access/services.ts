import prisma from "../../lib/prisma";
import { TStoreAccessSchema, TUpdateAccessSchema } from "./schema";
class AccessService {
  constructor() {}

  public async getAccessOptions(role_id?: string) {
    return await prisma.access.findMany({
      where: {
        deleted_at: null,
        roles: {
          none: { id: role_id },
        },
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

  public async getAccesss(search: string, limit: number, offset: number, role_id?: string) {
    return await prisma.access.findMany({
      where: {
        OR: [{ name: { contains: search } }, { desc: { contains: search } }],
        deleted_at: null,
        ...(role_id && {
          roles: {
            some: { id: role_id },
          },
        }),
      },
      orderBy: {
        name: "asc",
      },
      take: limit,
      skip: offset,
    });
  }

  public async getAccesssTotal(search: string, role_id?: string) {
    return await prisma.access.count({
      where: {
        OR: [{ name: { contains: search } }, { desc: { contains: search } }],
        deleted_at: null,
        ...(role_id && {
          roles: {
            some: { id: role_id },
          },
        }),
      },
    });
  }

  public async getAccessById(id: string) {
    return await prisma.access.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  public async getAccessByName(name: string) {
    return await prisma.access.findFirst({
      where: {
        name: {
          equals: name,
        },
        deleted_at: null,
      },
    });
  }

  public async createAccess(data: TStoreAccessSchema) {
    return await prisma.access.create({
      data: data,
    });
  }

  public async updateAccess(id: string, data: TUpdateAccessSchema) {
    return await prisma.access.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteAccess(id: string) {
    return await prisma.access.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }

  public async deleteRoleAccess(access_id: string, role_id?: string) {
    return await prisma.role.update({
      where: { id: role_id },
      data: {
        access: {
          disconnect: { id: access_id },
        },
      },
      include: { access: true },
    });
  }

  public async addRoleAccess(role_id: string, access_id: string) {
    return await prisma.role.update({
      where: { id: role_id },
      data: {
        access: {
          connect: { id: access_id },
        },
      },
      include: { access: true },
    });
  }
}

export default AccessService;
