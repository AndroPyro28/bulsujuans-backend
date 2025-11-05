import { TicketStatusEnum } from "@prisma/client";
import prisma from "../../lib/prisma";
import { TStoreTicketSchema, TUpdateTicketSchema } from "./schema";

class TicketService {
  constructor() {}

  public async getTicketOptions() {
    return await prisma.ticket.findMany({
      where: {
        deleted_at: null,
      },
      orderBy: {
        title: "asc",
      },
      select: {
        id: true,
        title: true,
      },
    });
  }

  public async getTickets(
    search: string,
    limit: number,
    offset: number,
    complaint_status?: TicketStatusEnum,
    assigned_office_id?: string,
    complaint_id?: string
  ) {
    return await prisma.ticket.findMany({
      where: {
        OR: [{ title: { contains: search } }, { description: { contains: search } }],
        status: complaint_status,
        complaint_id: complaint_id,
        assigned_office_id: assigned_office_id,
        deleted_at: null,
      },
      orderBy: {
        title: "asc",
      },
      take: limit,
      skip: offset,
    });
  }

  public async getTicketsTotal(
    search: string,
    complaint_status?: TicketStatusEnum,
    assigned_office_id?: string,
    complaint_id?: string
  ) {
    return await prisma.ticket.count({
      where: {
        OR: [{ title: { contains: search } }, { description: { contains: search } }],
        status: complaint_status,
        complaint_id: complaint_id,
        assigned_office_id: assigned_office_id,
        deleted_at: null,
      },
    });
  }

  public async getTicketById(id: string) {
    return await prisma.ticket.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  public async updateTicket(id: string, data: TUpdateTicketSchema) {
    return await prisma.ticket.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteTicket(id: string) {
    return await prisma.ticket.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }

  public async createTicket(data: TStoreTicketSchema) {
    return await prisma.ticket.create({
      data: data,
    });
  }
}

export default TicketService;
