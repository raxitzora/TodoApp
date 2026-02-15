import z from "zod";

export const createTodoSchema = z.object({
    title:z.string().min(1,"Title is required").max(100,"must less then 100").trim(),
    description:z.string.max(500,"Desctiption must be less then 500").optional(),
    priority:z.enum(["low","medium","high"]).default("medium")

})