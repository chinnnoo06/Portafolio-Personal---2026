import path from "path";
import fs from "fs";
import { UPLOADS_PATH } from "../config/env";

export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const deleteUploadedFiles = (files: Express.Multer.File[]) => {

  const projectsDir = path.resolve(UPLOADS_PATH, "projects");

  for (const file of files) {
    try {
      const filePath = path.join(projectsDir, file.filename);
      fs.unlinkSync(filePath);
      console.log("Eliminada basura:", file.filename);
    } catch (e) {
      console.error("Error eliminando archivo:", file.filename, e);
    }
  }
};