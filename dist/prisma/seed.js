"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const data_1 = require("./data");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.role.createMany({
        data: data_1.roleData,
    });
    console.log("ROLE SEEDED");
    const access = await prisma.access.createMany({
        data: [...data_1.AdminAccessData, ...data_1.ProfileAccessData, ...data_1.ComplaintAccessData, ...data_1.TicketAccessData, ...data_1.GeneralAccessData],
    });
    console.log("ACCESS SEEDED");
    const allRoles = await prisma.role.findMany();
    for (const role of allRoles) {
        if (role.name === "admin")
            await (0, data_1.createRoleAccessByRole)(role.id, data_1.adminRoleAccess);
        if (role.name === "students")
            await (0, data_1.createRoleAccessByRole)(role.id, data_1.studentRoleAccess);
        if (role.name === "teaching staff")
            await (0, data_1.createRoleAccessByRole)(role.id, data_1.teachingstaffRoleAccess);
        if (role.name === "non-teaching staff")
            await (0, data_1.createRoleAccessByRole)(role.id, data_1.nonTeachingstaffRoleAccess);
    }
    console.log("ROLE ACCESS SEEDED");
    await Promise.all(data_1.userData.map(async (user) => {
        await (0, data_1.createUser)({ ...user });
    }));
    console.log("USER SEEDED");
    await prisma.office.createMany({
        data: data_1.officeData.map((office) => ({
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
