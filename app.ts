import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("alim");
});

app.listen(9897, () => {
  console.log("Server running at 9897");
});
