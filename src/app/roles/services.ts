import prisma from "../../lib/prisma";
import { TStoreRoleSchema, TUpdateRoleSchema } from "./schema";

class RoleService {
  constructor() {}

  public async getRoles(search: string, limit: number, offset: number) {
    return await prisma.role.findMany({
      where: {
        OR: [{ name: { contains: search } }, { desc: { contains: search } }],
        deleted_at: null,
      },
      orderBy: {
        name: "asc",
      },
      take: limit,
      skip: offset,
    });
  }

  public async getRolesTotal(search: string) {
    return await prisma.role.count({
      where: {
        OR: [{ name: { contains: search } }, { desc: { contains: search } }],
        deleted_at: null,
      },
    });
  }

  public async getRoleById(id: string) {
    return await prisma.role.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  public async getRoleByName(name: string) {
    return await prisma.role.findFirst({
      where: {
        name: {
          equals: name,
        },
        deleted_at: null,
      },
    });
  }

  public async createRole(data: TStoreRoleSchema) {
    return await prisma.role.create({
      data: data,
    });
  }

  public async updateRole(id: string, data: TUpdateRoleSchema) {
    return await prisma.role.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteRole(id: string) {
    return await prisma.role.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }

  public async getUserAccess(email: string) {
    const userAccess = await prisma.user.findUnique({
      where: { email: email },
      select: {
        role: {
          select: {
            access: true,
          },
        },
      },
    });

    const accessList = userAccess?.role?.access || [];

    return accessList;
  }
}

export default RoleService;
