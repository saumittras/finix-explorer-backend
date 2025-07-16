import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import expressSession from "express-session";
import passport from "passport";
import "./app/config/passport";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes";

const app = express();

app.use(
  expressSession({
    secret: "Your Secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/app/v1", router);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Finix Elplore Backend",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
