import { OfficeType, Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const office_names = {
  guidance: "Guidance Office",
  health_services: "Health Services Office",
  security: "Security Office",
  discipline: "Discipline Office",
  student_affairs: "Student Affairs Office",
  finance: "Finance Office",
  administrative: "Administrative Office",
};

/* SETUP USER */
export const userData: {
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  roleName: string;
  student_id?: string;
  office_name?: string;
}[] = [
  {
    /* ADMIN 1 */
    email: "Menandroeugenio1028@gmail.com",
    first_name: "Menandro",
    middle_name: "Santos",
    last_name: "Eugenio",
    roleName: "admin",
    office_name: office_names.administrative,
  },
  {
    /* ADMIN 2 */
    email: "jhondeldelconacaranay@gmail.com",
    first_name: "Johndel",
    middle_name: "Delicona",
    last_name: "Caranay",
    roleName: "admin",
    office_name: office_names.administrative,
  },
  {
    /* ADMIN 3 */
    email: "heralatrina+admin@gmail.com",
    first_name: "Trina",
    middle_name: "Cruz",
    last_name: "Heralta",
    roleName: "admin",
    office_name: office_names.administrative,
  },
  {
    /* REGULAR STUDENT */
    email: "heralatrina+student@gmail.com",
    first_name: "Trina",
    middle_name: "Cruz",
    last_name: "Heralta",
    student_id: "1000",
    roleName: "students",
    office_name: undefined,
  },
  {
    /* REGULAR STUDENT */
    email: "student1@example.com",
    first_name: "Lara",
    middle_name: "Mae",
    last_name: "Cruz",
    student_id: "1001",
    roleName: "students",
    office_name: undefined,
  },
  {
    /* REGULAR STUDENT WITH OFFICE ON Student Affairs Office  */
    email: "student2@example.com",
    first_name: "Diana",
    middle_name: "Rose",
    last_name: "Reyes",
    student_id: "1002",
    roleName: "students",
    office_name: office_names.student_affairs,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Guidance Office */
    email: "teacher@example.com",
    first_name: "Mark",
    middle_name: "Anthony",
    last_name: "Santos",
    roleName: "teaching staff",
    office_name: office_names.guidance,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Health Services Office */
    email: "teacher1@example.com",
    first_name: "Lance",
    middle_name: "Rey",
    last_name: "Domingo",
    roleName: "teaching staff",
    office_name: office_names.health_services,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Security Office */
    email: "teacher2@example.com",
    first_name: "Carl",
    middle_name: "John",
    last_name: "Villanueva",
    roleName: "teaching staff",
    office_name: office_names.security,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Discipline Office */
    email: "teacher3@example.com",
    first_name: "Ethan",
    middle_name: "James",
    last_name: "Delos Santos",
    roleName: "teaching staff",
    office_name: office_names.discipline,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Discipline Office */
    email: "teacher4@example.com",
    first_name: "Jacob",
    middle_name: "Luis",
    last_name: "Garcia",
    roleName: "teaching staff",
    office_name: office_names.discipline,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Finance Office */
    email: "teacher5@example.com",
    first_name: "Adrian",
    middle_name: "Paul",
    last_name: "Ramos",
    roleName: "teaching staff",
    office_name: office_names.finance,
  },
  {
    /* TEACHING STAFF WITH OFFICE ON Administrative Office */
    email: "teacher6@example.com",
    first_name: "Nathan",
    middle_name: "Kyle",
    last_name: "Fernandez",
    roleName: "teaching staff",
    office_name: office_names.administrative,
  },
  {
    /* NON TEACHING STAFF */
    email: "nonteacher@example.com",
    first_name: "Ella",
    middle_name: "Grace",
    last_name: "Mendoza",
    roleName: "non-teaching staff",
  },
];

/* SETP ROLE */
export const roleData: Prisma.RoleCreateInput[] = [
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

export const GeneralAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("services", ["view_list", "view_detail", "create", "edit", "delete"]),
  ...generateAccessTemplate("news", ["view_list", "view_detail", "create", "edit", "delete"]),
  ...generateAccessTemplate("emergency", ["view_list", "view_detail", "create", "edit", "delete"]),
];

export const ComplaintAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("complaint", ["view_list", "view_detail", "create", "edit", "delete"]),
];

export const TicketAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("tickets", ["view_list", "view_detail", "edit", "delete", "export_file"]),
];

export const ProfileAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("profile", ["view_profile", "edit_profile", "change_password"]),
];

export const AdminAccessData: Prisma.AccessCreateInput[] = [
  ...generateAccessTemplate("users", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
  ...generateAccessTemplate("roles", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
  ...generateAccessTemplate("access", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
  ...generateAccessTemplate("offices", ["view_list", "view_detail", "create", "edit", "delete", "export_file"]),
];

/* SETUP ROLE ACCESS */
export const adminRoleAccess: string[] = [
  ...AdminAccessData.map((access) => access.code),
  ...ProfileAccessData.map((access) => access.code),
  ...ComplaintAccessData.map((access) => access.code),
  ...TicketAccessData.map((access) => access.code),
  ...GeneralAccessData.map((access) => access.code),
];

export const teachingstaffRoleAccess: string[] = [
  ...ProfileAccessData.map((access) => access.code),
  ...TicketAccessData.map((access) => access.code),
  ...GeneralAccessData.map((access) => access.code),
];

export const nonTeachingstaffRoleAccess: string[] = [
  ...ProfileAccessData.map((access) => access.code),
  // ...TicketAccessData.map((access) => access.code),
  ...["services:view_list", "services:view_detail"],
  ...["news:view_list", "news:view_detail"],
  ...["emergency:view_list", "emergency:view_detail"],
];

export const studentRoleAccess: string[] = [
  ...ProfileAccessData.map((access) => access.code),
  ...ComplaintAccessData.map((access) => access.code),
  ...["services:view_list", "services:view_detail"],
  ...["news:view_list", "news:view_detail"],
  ...["emergency:view_list", "emergency:view_detail"],
];

export const officeData = [
  {
    type: OfficeType.GUIDANCE,
    name: "Guidance Office",
    desc: "Handles cases involving bullying, discrimination, and harassment to ensure student welfare and mental well-being.",
  },
  {
    type: OfficeType.HEALTH_SERVICES,
    name: "Health Services Office",
    desc: "Provides immediate mental health support, counseling, and intervention for students showing signs of distress or self-harm.",
  },
  {
    type: OfficeType.SECURITY,
    name: "Security Office",
    desc: "Ensures campus safety by addressing threats, violence, and activities related to dangerous organizations.",
  },
  {
    type: OfficeType.DISCIPLINE,
    name: "Discipline Office",
    desc: "Oversees violations involving sexual misconduct and indecent behavior to uphold moral and disciplinary standards.",
  },
  {
    type: OfficeType.STUDENT_AFFAIRS,
    name: "Student Affairs Office",
    desc: "Investigates incidents involving the sale or promotion of prohibited goods such as drugs, alcohol, or contraband.",
  },
  {
    type: OfficeType.FINANCE,
    name: "Finance Office",
    desc: "Handles reports of financial scams, fraudulent transactions, and misuse of funds related to school activities.",
  },
  {
    type: OfficeType.ADMINISTRATIVE,
    name: "Administrative Office",
    desc: "Manages general complaints that do not fall under specific categories, ensuring proper redirection and resolution.",
  },
];

export async function createRoleAccessByRole(role_id: string, access_codes: string[]) {
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
  first_name,
  middle_name,
  last_name,
  roleName,
  student_id,
  office_name,
}: {
  email: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  roleName: string;
  student_id?: string;
  office_name?: string;
}) {
  const role = await prisma.role.findUnique({
    where: { name: roleName },
  });

  if (!role) {
    throw new Error(`Role "${roleName}" not found`);
  }

  const office = await prisma.office.findUnique({
    where: { name: office_name || "" },
  });

  const credential = await prisma.credential.create({
    data: {
      student_id,
      email,
      access_token: "",
      refresh_token: "",
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
      office: office ? { connect: { id: office.id } } : undefined,
    },
    include: {
      role: true,
      credential: true,
    },
  });
}

export function generateAccessTemplate(module: string, actions: string[]): Prisma.AccessCreateInput[] {
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

export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}
