import fs from "fs";
import path from "path";
import z from "zod";
import { FILE_NAME } from "../shared/constants";

export const fileSchema = z.enum(FILE_NAME);

export function logger(
  message: string,
  type: "warn" | "error" | "info" | "debug" = "warn"
) {
  console[type](`⚡️ [create-react-routes]: ${message}`);
}

/**
 *
 * @param {string} folderPath
 * @returns {string[]}
 */
export function readFolderFiles(folderPath: string): string[] {
  try {
    const files = fs.readdirSync(folderPath);

    return files.flatMap((file) => {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        return readFolderFiles(filePath);
      } else {
        return filePath;
      }
    });
  } catch (error) {
    logger(`Error reading folder '${folderPath}'`, "error");
    throw Error(`Error reading folder '${folderPath}'`);
  }
}
