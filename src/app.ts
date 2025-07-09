import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1");
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Toure Management System Backend",
  });
});
app.use(globalError);

export default app;
