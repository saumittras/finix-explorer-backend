import dotnet from "dotenv";

dotnet.config();

interface envConfigs {
  PORT: string;
  MONGO_DB: string;
  NODE_ENV: "development" | "production";
}

const loadEnvVariables = (): envConfigs => {
  const requiredEnvVariables: string[] = ["PORT", "MONGO_DB", "NODE_ENV"];

  requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable ${key}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    MONGO_DB: process.env.MONGO_DB!,
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
  };
};

export const envVars = loadEnvVariables();
