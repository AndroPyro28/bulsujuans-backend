import prisma from "../../lib/prisma";

class DocumentService {
  constructor() {}

  public async uploadDocument(
    data: {
      public_url: string;
      public_id: string;
      complaint_id: string;
    }[]
  ) {
    return await prisma.documents.createMany({
      data: data,
    });
  }
}

export default DocumentService;
