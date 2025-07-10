/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://saumittra_DB:Saumittra12@tsoftelectronics.l4wjuvt.mongodb.net/tour_DB?retryWrites=true&w=majority&appName=TSoftElectronics`
    );

    console.log("Connected to DB!!");

    server = app.listen(5000, () => {
      console.log(`Server is listening to port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

// unhandle rejection error
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected... Server shutting down", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

//  * unhandle rejection error
// Promise.reject(new Error("I forget to catch this promise"));

// Error No 2: uncaught rejection error
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected... Server shutting down", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

//**uncaught rejection error
// throw new Error("I forgot to handle this local error");

// * signal termination sigterm
process.on("SIGTERM", () => {
  console.log("SIGTERM Signal received... Server shutting down");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("SIGINT Signal received... Server shutting down");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

/**
 * unhandle rejection error
 * uncaught rejection error
 * signal termination sigterm
 */
