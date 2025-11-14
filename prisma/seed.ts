import { PrismaClient, Prisma } from "@prisma/client";
import {
  AdminAccessData,
  adminRoleAccess,
  ComplaintAccessData,
  createRoleAccessByRole,
  createUser,
  GeneralAccessData,
  nonTeachingstaffRoleAccess,
  officeData,
  ProfileAccessData,
  roleData,
  studentRoleAccess,
  teachingstaffRoleAccess,
  TicketAccessData,
  userData,
} from "./data";
const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: roleData,
    skipDuplicates: true,
  });
  console.log("ROLE SEEDED");

  const access = await prisma.access.createMany({
    data: [...AdminAccessData, ...ProfileAccessData, ...ComplaintAccessData, ...TicketAccessData, ...GeneralAccessData],
  });
  console.log("ACCESS SEEDED");

  const allRoles = await prisma.role.findMany();
  for (const role of allRoles) {
    if (role.name === "admin") await createRoleAccessByRole(role.id, adminRoleAccess);
    if (role.name === "students") await createRoleAccessByRole(role.id, studentRoleAccess);
    if (role.name === "teaching staff") await createRoleAccessByRole(role.id, teachingstaffRoleAccess);
    if (role.name === "non-teaching staff") await createRoleAccessByRole(role.id, nonTeachingstaffRoleAccess);
  }
  console.log("ROLE ACCESS SEEDED");

  await Promise.all(
    userData.map(async (user) => {
      await createUser({ ...user });
    })
  );

  console.log("USER SEEDED");

  await prisma.office.createMany({
    data: officeData.map((office) => ({
      name: office.name,
      desc: office.desc,
      type: office.type,
    })),
  });

  console.log("OFFICE SEEDED");

  console.log("SEED COMPLETED");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
