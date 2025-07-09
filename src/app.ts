import express, { Request, Response } from "express";
/* eslint-disable no-console */
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Finix Elplore Backend",
  });
});

export default app;
