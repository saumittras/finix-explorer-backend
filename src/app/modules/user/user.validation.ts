import z from "zod";
import { IsActive, Role } from "./user.interface";

export const createUserZodSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be string" })
    .min(2, { message: "Name too short" })
    .max(50, { message: "Name too long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number",
    }),
  phone: z
    .string({ invalid_type_error: "Address must be String" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh, Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  address: z
    .string({ invalid_type_error: "Address must be string" })
    .max(200, { message: "Address can notexceed 200 characters" })
    .optional(),
});

export const updateUserZodSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be string" })
    .min(2, { message: "Name too short" })
    .max(50, { message: "Name too long" })
    .optional(),

  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number",
    })
    .optional(),

  phone: z
    .string({ invalid_type_error: "Address must be String" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh, Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),

  role: z.enum(Object.values(Role) as [string]).optional(),
  isActive: z.enum(Object.values(IsActive) as [string]).optional(),
  isDeleted: z.string(),
  isVerified: z
    .boolean({ invalid_type_error: "isVerified must be true or false" })
    .optional(),
  address: z
    .string({ invalid_type_error: "Address must be string" })
    .max(200, { message: "Address can notexceed 200 characters" })
    .optional(),
});
