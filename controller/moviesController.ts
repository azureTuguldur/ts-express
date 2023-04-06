import { Request, Response } from "express";
import Movie from "../model/Movie";

const getMovies = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 0;

  const total = await Movie.countDocument();
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit;

  const movies = await Movie.find().limit(10);
  res.status(200).json({ success: true, movies });
};

export { getMovies };
