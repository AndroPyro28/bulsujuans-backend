import { PrismaClient, Role, Prisma, User, OfficeType } from "@prisma/client";
import { hash } from "../src/lib/jwt";
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
    email: "Menandroeugenio1028@gmail.com",
    first_name: "Menandro",
    middle_name: "Santos",
    last_name: "Eugenio",
    student_id: "1000",
  },
  {
    email: "jhondeldelconacaranay@gmail.com",
    first_name: "Johndel",
    middle_name: "Delicona",
    last_name: "Caranay",
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

const GeneralAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("services", ["view_list", "view_detail", "create", "edit", "delete"]),
  ...generateAccessTemplate("news", ["view_list", "view_detail", "create", "edit", "delete"]),
  ...generateAccessTemplate("emergency", ["view_list", "view_detail", "create", "edit", "delete"]),
];

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
  ...generateAccessTemplate("offices", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
];

/* SETUP ROLE ACCESS */
const adminRoleAccess: string[] = [
  ...AdminAccessData.map((access) => access.code),
  ...ProfileAccessData.map((access) => access.code),
  ...ComplaintAccessData.map((access) => access.code),
  ...TicketAccessData.map((access) => access.code),
  ...GeneralAccessData.map((access) => access.code),
];

const teachingstaffRoleAccess: string[] = [
  ...ProfileAccessData.map((access) => access.code),
  ...TicketAccessData.map((access) => access.code),
  ...GeneralAccessData.map((access) => access.code),
];

const nonTeachingstaffRoleAccess: string[] = [
  ...ProfileAccessData.map((access) => access.code),
  ...TicketAccessData.map((access) => access.code),
  ...["services:view_list", "services:view_detail"],
  ...["news:view_list", "news:view_detail"],
  ...["emergency:view_list", "emergency:view_detail"],
];

const studentRoleAccess: string[] = [
  ...ProfileAccessData.map((access) => access.code),
  ...ComplaintAccessData.map((access) => access.code),
  ...["services:view_list", "services:view_detail"],
  ...["news:view_list", "news:view_detail"],
  ...["emergency:view_list", "emergency:view_detail"],
];

async function main() {
  await prisma.role.createMany({
    data: roleData,
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

  await createUser({ ...userData[0], roleName: "admin", username: "andro", password: "pass1234" });
  await createUser({ ...userData[1], roleName: "admin", username: "jhondel", password: "pass1234" });
  await createUser({ ...userData[2], roleName: "students", username: "students", password: "pass1234" });
  await createUser({ ...userData[3], roleName: "teaching staff", username: "teacher", password: "pass1234" });
  await createUser({ ...userData[4], roleName: "non-teaching staff", username: "nonteacher", password: "pass1234" });
  console.log("USER SEEDED");

  await prisma.office.createMany({
    data: complaintTypeOffices.map((office) => ({
      name: office.name,
      desc: office.desc,
      type: office.type,
    })),
  });

  console.log("OFFICE SEEDED");

  console.log("SEED COMPLETED");
}

export const complaintTypeOffices = [
  {
    type: OfficeType.guidance,
    name: "Guidance Office",
    desc: "Handles cases involving bullying, discrimination, and harassment to ensure student welfare and mental well-being.",
  },
  {
    type: OfficeType.health_services,
    name: "Health Services Office",
    desc: "Provides immediate mental health support, counseling, and intervention for students showing signs of distress or self-harm.",
  },
  {
    type: OfficeType.security,
    name: "Security Office",
    desc: "Ensures campus safety by addressing threats, violence, and activities related to dangerous organizations.",
  },
  {
    type: OfficeType.discipline,
    name: "Discipline Office",
    desc: "Oversees violations involving sexual misconduct and indecent behavior to uphold moral and disciplinary standards.",
  },
  {
    type: OfficeType.student_affairs,
    name: "Student Affairs Office",
    desc: "Investigates incidents involving the sale or promotion of prohibited goods such as drugs, alcohol, or contraband.",
  },
  {
    type: OfficeType.finance,
    name: "Finance Office",
    desc: "Handles reports of financial scams, fraudulent transactions, and misuse of funds related to school activities.",
  },
  {
    type: OfficeType.administrative,
    name: "Administrative Office",
    desc: "Manages general complaints that do not fall under specific categories, ensuring proper redirection and resolution.",
  },
];

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

  const hashedPassword = await hash(password);

  const credential = await prisma.credential.create({
    data: {
      student_id,
      email,
      access_token: "",
      refresh_token: "",
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
  // return actions.map((action) => {
  //   const code = `${module}:${action.toLowerCase().replace(/\s+/g, "_")}`;
  //   const name = toTitleCase(`${action} ${module}`);
  //   const desc = `Allow user to ${action} ${module}`;
  //   return { code, name, desc };
  // });
  return actions.map((action) => {
    const code = `${module}:${action.toLowerCase().replace(/\s+/g, "_")}`;
    const cleanAction = action.replace(/_/g, " ");
    const name = toTitleCase(`${cleanAction} ${module}`);
    const desc = `Allow user to ${cleanAction} ${module}`;
    return { code, name, desc };
  });

  /* 
  output example
  [
    {
      code: "users:view_list",
      name: "View List  Users",
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
