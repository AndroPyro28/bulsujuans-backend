import prisma from "../../lib/prisma";

class Authhervice {
  constructor() {}

  public async register(body: any) {
    return await prisma.user.findMany();
  }
}

export default Authhervice;
