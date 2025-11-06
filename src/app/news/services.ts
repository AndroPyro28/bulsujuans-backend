import { NewsCategory } from "@prisma/client";
import prisma from "../../lib/prisma";
import { TStoreNewsSchema, TUpdateNewsSchema } from "./schema";

class NewsService {
  constructor() {}

  public async getNewsOptions() {
    return await prisma.news.findMany({
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

  public async getNews(
    search: string,
    limit: number,
    offset: number,
    news_category?: NewsCategory,
    posted_by_id?: string
  ) {
    return await prisma.news.findMany({
      where: {
        OR: [{ title: { contains: search } }, { source: { contains: search } }],
        category: news_category,
        posted_by_id: posted_by_id,
        deleted_at: null,
      },
      orderBy: {
        title: "asc",
      },
      take: limit,
      skip: offset,
    });
  }

  public async getNewsTotal(search: string, news_category?: NewsCategory, posted_by_id?: string) {
    return await prisma.news.count({
      where: {
        OR: [{ title: { contains: search } }, { source: { contains: search } }],
        category: news_category,
        posted_by_id: posted_by_id,
        deleted_at: null,
      },
    });
  }

  public async getNewsById(id: string) {
    return await prisma.news.findFirst({
      where: {
        id: {
          equals: id,
        },
        deleted_at: null,
      },
    });
  }

  public async getNewsByName(name: string) {
    return await prisma.news.findFirst({
      where: {
        title: {
          equals: name,
        },
        deleted_at: null,
      },
    });
  }

  public async createNews(data: TStoreNewsSchema) {
    return await prisma.news.create({
      data: data,
    });
  }

  public async updateNews(id: string, data: TUpdateNewsSchema) {
    return await prisma.news.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  public async deleteNews(id: string) {
    return await prisma.news.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export default NewsService;
