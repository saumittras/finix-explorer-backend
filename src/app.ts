import cors from "cors";
import express, { Request, Response } from "express";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { router } from "./app/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/app/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Finix Elplore Backend",
  });
});

app.use(globalErrorHandler);

export default app;
