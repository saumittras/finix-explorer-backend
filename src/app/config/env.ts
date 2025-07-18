import dotnet from "dotenv";

dotnet.config();

interface envConfigs {
  PORT: string;
  MONGO_DB: string;
  NODE_ENV: "development" | "production";
  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_EXPIRE: string;
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_EXPIRE: string;
  BCRYPT_SALT_ROUND: string;
  SUPER_ADMIN_EMAIL: string;
  SUPER_ADMIN_PASSWORD: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_CALLBACK_URL: string;
  EXPRESS_SESSION_SECRET: string;
  FRONTEND_URL: string;
}

const loadEnvVariables = (): envConfigs => {
  const requiredEnvVariables: string[] = [
    "PORT",
    "MONGO_DB",
    "NODE_ENV",
    "JWT_ACCESS_SECRET",
    "JWT_ACCESS_EXPIRE",
    "JWT_REFRESH_SECRET",
    "JWT_REFRESH_EXPIRE",
    "BCRYPT_SALT_ROUND",
    "SUPER_ADMIN_EMAIL",
    "SUPER_ADMIN_PASSWORD",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "GOOGLE_CALLBACK_URL",
    "EXPRESS_SESSION_SECRET",
    "FRONTEND_URL",
  ];

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
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    JWT_ACCESS_EXPIRE: process.env.JWT_ACCESS_EXPIRE as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_REFRESH_EXPIRE: process.env.JWT_REFRESH_EXPIRE as string,
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL as string,
    SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD as string,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL as string,
    EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET as string,
    FRONTEND_URL: process.env.FRONTEND_URL as string,
  };
};

export const envVars = loadEnvVariables();
