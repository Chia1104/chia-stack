import { fileSchema } from "../utils";
import z from "zod";

export type File = z.infer<typeof fileSchema>;
