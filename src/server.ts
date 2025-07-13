/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

let server: Server;
const startServer = async () => {
  try {
    await mongoose.connect(envVars.MONGO_DB);
    console.log("Connected to DB!!");
    server = app.listen(envVars.PORT, () => {
      console.log(`Server is listening to port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
  await seedSuperAdmin();
})();

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
