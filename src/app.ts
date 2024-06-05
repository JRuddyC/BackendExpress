import express, { Application, Request, Response } from "express";
import authRoutes from './routes/authRoutes'

const app: Application = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req: Request, res: Response) => {
    res.send('welcome to the jg')
})

app.use('/auth', authRoutes)

export default app