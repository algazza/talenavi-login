import z from "zod";

export const FormSchema = z.object({
  email: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "Wajib diisi" : "",
    })
    .email("Email tidak valid"),
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "Wajib diisi" : "",
    })
    .min(6, "Password minimal 6 karakter"),
});

export type formType = z.infer<typeof FormSchema>;
