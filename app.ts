import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/mongoDB";
import movieRoutes from "./Routes/movieRoutes";
const app = express();

const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI || "";

app.use("/movies", movieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("alim");
});

connectDB(DATABASE_URI);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
