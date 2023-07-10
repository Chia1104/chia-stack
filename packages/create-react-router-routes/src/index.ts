import * as fs from "fs";
import * as path from "path";

export default function readFolderFiles(folderPath: string): string[] {
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
    console.error("Error reading folder:", error);
    return [];
  }
}
