import { z } from "zod"

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "Username Must Be At Least 2 Characters.")
        .max(50, "Username Must Be At Most 50 Characters."),
    email: z.string().email("Invalid Email Address."),
    phone: z.string().refine((phone) => /^\+?[1-9]{1,14}$/.test(phone), 'Invalid Phone Number'),
})