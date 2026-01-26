import { NextFunction, Request, Response } from "express";
import jwt from 'jwt-simple'
import moment from "moment";
import { SECRET_KEY } from "../config/env";
import { TPayloadToken } from "../services/jwt.service";
import { User } from "../models/User";

declare global {
    namespace Express {
        interface Request {
            user?: TPayloadToken
        }
    }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    let token = null;
    // Buscar token en cookies
    if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token && req.headers.authorization) {
        token = req.headers.authorization.replace(/['"]+/g, '');
    }

    if (!token) {
        return res.status(403).json({ status: "error", mensaje: "No hay token de autenticación" });
    }

    try {
        const payload = jwt.decode(token, SECRET_KEY) as TPayloadToken;

        // Validar expiración
        if (payload.exp <= moment().unix()) {
            return res.status(401).json({ status: "error", mensaje: "Token expirado" });
        }

        const exist = await User.exists({ _id: payload._id })

        if (!exist) {
            return res.status(401).json({ status: "error", mensaje: "Token inválido" });
        }

        req.user = payload;

        next();
    } catch (err) {
        return res.status(401).json({ status: "error", mensaje: "Token inválido" });
    }
}