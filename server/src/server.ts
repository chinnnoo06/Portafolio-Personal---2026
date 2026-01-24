import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import { connectDB } from './config/db'
import { corsOptions } from './config/cors'
import { errorHandler } from './middleware/error'

import contactRoutes from './routers/contact.routes'
import userRoutes from './routers/user.routes'
import projectRoutes from './routers/project.routes'
import { UPLOADS_PATH } from './config/env'

connectDB()

const server = express();

server.use(cookieParser());

server.use(cors(corsOptions))

// Servir archivos estáticos solo en dev,en prod lo hace nginx
if (process.env.NODE_ENV !== 'production') {
  server.use('/uploads', express.static(UPLOADS_PATH))
}

server.use(express.json())

server.use(morgan('dev'))

server.use('/api/contact', contactRoutes)
server.use('/api/user', userRoutes)
server.use('/api/project', projectRoutes)

server.use(errorHandler);

export default server