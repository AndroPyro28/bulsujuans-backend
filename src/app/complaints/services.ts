import prisma from "../../lib/prisma";
import { TStoreComplaintSchema, TUpdateComplaintSchema } from "./schema";

class ComplaintService {
  constructor() {}

  public async getComplaints(search: string, limit: number, offset: number, complainant_id?: string) {
    return await prisma.complaint.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { email: { contains: search } },
          { incident_detail: { contains: search } },
        ],
        complainant_id: complainant_id,
        deleted_at: null,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        ticket: true,
      },
      take: limit,
      skip: offset,
    });
  }

  public async getComplaintsTotal(search: string, complainant_id?: string) {
    return await prisma.complaint.count({
      where: {
        OR: [
          { name: { contains: search } },
          { email: { contains: search } },
          { incident_detail: { contains: search } },
        ],
        complainant_id: complainant_id,
        deleted_at: null,
      },
    });
  }

  public async getComplaintById(
    id: string,
    includes: { withDocuments?: boolean; withTickets?: boolean } = { withDocuments: false, withTickets: false }
  ) {
    return await prisma.complaint.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
      include: {
        documents: includes.withDocuments,
        ticket: includes.withTickets,
      },
    });
  }

  public async createComplaint(data: TStoreComplaintSchema) {
    return await prisma.complaint.create({
      data: data,
    });
  }

  public async updateComplaint(id: string, data: TUpdateComplaintSchema) {
    return await prisma.complaint.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteComplaint(id: string) {
    return await prisma.complaint.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default ComplaintService;
