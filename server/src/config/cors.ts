import { CorsOptions } from "cors";
import { FRONTEND_URL } from "./env";

export const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        // Permite frontend
        if (origin === FRONTEND_URL) {
            return callback(null, true);
        }

        // Bloquea navegadores no autorizados
        return callback(new Error("Error de CORS"), false);
    }
}