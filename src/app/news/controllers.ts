import { Request, Response } from "express";
import newsService from "./services";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreNewsSchema, TUpdateNewsSchema } from "./schema";
import { NewsCategory } from "@prisma/client";
import { parseEnumParam } from "../../lib/prisma";

class NewsController {
  private newsService: newsService = new newsService();
  constructor() {}

  options = async (req: Request, res: Response) => {
    try {
      const data = await this.newsService.getNewsOptions();

      const formattedData = data.map((news) => ({
        label: news.title,
        value: news.id,
      }));

      return res.status(StatusCodes.OK).json({
        data: formattedData,
        success: true,
        message: "Get news Options",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch news options");
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;
      const news_category = parseEnumParam(req.query.news_type, NewsCategory);
      const posted_by_id = (req.query.posted_by_id as string) || undefined;

      const data = await this.newsService.getNews(search, limit, offset, news_category, posted_by_id);
      const total = await this.newsService.getNewsTotal(search, news_category, posted_by_id);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get news",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch newss");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;
      const data = await this.newsService.getNewsById(id);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "News id doesn't exist");
      }

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get News Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch news");
    }
  };

  store = async (req: Request, res: Response) => {
    const body = req.body as TStoreNewsSchema;
    try {
      const news = await this.newsService.getNewsByName(body.title);

      if (news) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "News already exist");
      }

      const data = await this.newsService.createNews(body);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Failed to create news");
      }

      return res.status(StatusCodes.CREATED).json({
        data,
        success: true,
        message: "News Created Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create news");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateNewsSchema;
    try {
      const news = await this.newsService.getNewsById(id);

      if (!news) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "News id doesn't exist");
      }

      const data = await this.newsService.updateNews(id, body);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "News Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update news");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const news = await this.newsService.getNewsById(id);

      if (!news) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "News id doesn't exist");
      }

      const data = await this.newsService.deleteNews(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "News Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete news");
    }
  };
}

export default NewsController;
