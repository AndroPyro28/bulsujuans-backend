import prisma from "../../lib/prisma";

class RoleService {
  constructor() {}

  public async getRoles() {
    return "get roles";
  }

  public async getRoleById() {
    return "get role by id";
  }

  public async getRoleDetail() {
    return "get role detail";
  }

  public async createRole() {
    return "create role";
  }

  public async updateRole() {
    return "update role";
  }

  public async deleteRole() {
    return "delete role";
  }

  public async getUserAccess(email: string) {
    const userAccess = await prisma.user.findUnique({
      where: { email: email },
      select: {
        role: {
          select: {
            access: true, // get all Access records under the user's Role
          },
        },
      },
    });

    const accessList = userAccess?.role?.access || [];

    return accessList;
  }
}

export default RoleService;
