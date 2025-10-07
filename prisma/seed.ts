import { PrismaClient, Role, Prisma, User } from "@prisma/client";
import { hashPassword } from "../src/lib/jwt";
const prisma = new PrismaClient();

/* SETUP USER */
const userData: {
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  student_id: string;
}[] = [
  {
    email: "doe.admin@gmail.com",
    first_name: "John",
    middle_name: "Michael",
    last_name: "Doe",
    student_id: "1001",
  },
  {
    email: "sarah.student@example.com",
    first_name: "Sarah",
    middle_name: "Anne",
    last_name: "Smith",
    student_id: "1002",
  },
  {
    email: "matthew.teacher@example.com",
    first_name: "Matthew",
    middle_name: "Ryan",
    last_name: "Jones",
    student_id: "1003",
  },
  {
    email: "emily.nonteacher@example.com",
    first_name: "Emily",
    middle_name: "Grace",
    last_name: "Brown",
    student_id: "1004",
  },
];

/* SETP ROLE */
const roleData: Prisma.RoleCreateInput[] = [
  {
    name: "admin",
    desc: "Admin",
  },
  {
    name: "students",
    desc: "Students",
  },
  {
    name: "teaching staff",
    desc: "Teaching Staff",
  },
  {
    name: "non-teaching staff",
    desc: "Non-teaching Staff",
  },
];
/* SETUP ACCECSS */

const ComplaintAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("complaint", ["view_list", "view_detail", "create", "edit", "delete"]),
];

const TicketAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("tickets", ["view_list", "view_detail", "edit", "delete", "export_file"]),
];

const ProfileAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("profile", ["view_profile", "edit_profile", "change_password"]),
];

const AdminAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("users", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
  ...generateAccessTemplate("roles", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
  ...generateAccessTemplate("access", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
];

async function main() {
  /* SETUP ROLE ACCESS */
  const adminRoleAccess: string[] = [
    ...AdminAccessData.map((access) => access.code),
    ...ProfileAccessData.map((access) => access.code),
    ...ComplaintAccessData.map((access) => access.code),
    ...TicketAccessData.map((access) => access.code),
  ];
  const studentRoleAccess: string[] = [
    ...ProfileAccessData.map((access) => access.code),
    ...ComplaintAccessData.map((access) => access.code),
  ];
  const teachingstaffRoleAccess: string[] = [
    ...ProfileAccessData.map((access) => access.code),
    ...TicketAccessData.map((access) => access.code),
  ];
  const nonTeachingstaffRoleAccess: string[] = [
    ...ProfileAccessData.map((access) => access.code),
    ...TicketAccessData.map((access) => access.code),
  ];

  await prisma.role.createMany({
    data: roleData,
  });
  console.log("ROLE SEEDED");

  const access = await prisma.access.createMany({
    data: [...AdminAccessData, ...ProfileAccessData, ...ComplaintAccessData, ...TicketAccessData],
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

  await createUser({ ...userData[0], roleName: "admin", username: "admin", password: "pass1234" });
  await createUser({ ...userData[1], roleName: "students", username: "students", password: "pass1234" });
  await createUser({ ...userData[2], roleName: "teaching staff", username: "teacher", password: "pass1234" });
  await createUser({ ...userData[3], roleName: "non-teaching staff", username: "nonteacher", password: "pass1234" });
  console.log("USER SEEDED");

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

async function createRoleAccessByRole(role_id: string, access_codes: string[]) {
  const accesses = await prisma.access.findMany({
    where: {
      code: { in: access_codes },
    },
    select: { id: true },
  });

  if (accesses.length === 0) {
    console.warn(`⚠️ No matching access found for role ${role_id}`);
    return;
  }

  await prisma.role.update({
    where: { id: role_id },
    data: {
      access: {
        connect: accesses.map((a) => ({ id: a.id })),
      },
    },
  });
}

export async function createUser({
  email,
  username,
  password,
  first_name,
  middle_name,
  last_name,
  roleName,
  student_id,
}: {
  email: string;
  username: string;
  password: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  roleName: string;
  student_id: string;
}) {
  const role = await prisma.role.findUnique({
    where: { name: roleName },
  });

  if (!role) {
    throw new Error(`Role "${roleName}" not found`);
  }

  const hashedPassword = await hashPassword(password);

  const credential = await prisma.credential.create({
    data: {
      student_id,
      access_token: "",
      password: hashedPassword,
    },
  });

  const user = await prisma.user.create({
    data: {
      student_id,
      email,
      first_name,
      middle_name,
      last_name,
      role: { connect: { id: role.id } },
      credential: { connect: { id: credential.id } },
    },
    include: {
      role: true,
      credential: true,
    },
  });
}

function generateAccessTemplate(module: string, actions: string[]): Prisma.AccessCreateInput[] {
  return actions.map((action) => {
    const code = `${module}:${action.toLowerCase().replace(/\s+/g, "_")}`;
    const name = toTitleCase(`${action} ${module}`);
    const desc = `Allow user to ${action} ${module}`;
    return { code, name, desc };
  });

  /* 
  output example
  [
    {
      code: "users:view_list_page",
      name: "View List Page Users",
      desc: "Allow user to view_list_page users"
    },
    {
      code: "users:create",
      name: "Create Users",
      desc: "Allow user to create users"
    },
    {
      code: "users:edit",
      name: "Edit Users",
      desc: "Allow user to edit users"
    },
    ...
  ]
  */
}

function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}
