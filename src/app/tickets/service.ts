import prisma from "../../lib/prisma";
import { TStoreTicketSchema } from "./schema";

class TicketService {
  constructor() {}

  public async createTicket(data: TStoreTicketSchema) {
    return await prisma.ticket.create({
      data: data,
    });
  }
}

export default TicketService;
