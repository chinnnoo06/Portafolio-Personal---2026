import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI!
export const SECRET_KEY = process.env.SECRET_KEY!
export const FRONTEND_URL = process.env.FRONTEND_URL!
export const PORT = process.env.PORT!
export const GMAIL_USER = process.env.GMAIL_USER!
export const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD!
export const UPLOADS_PATH = process.env.UPLOADS_PATH || 'src/uploads'
