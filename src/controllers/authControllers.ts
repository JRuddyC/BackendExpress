import { Request, Response } from "express";
import User from "../models/user";

const register = async (req: Request, res: Response) => {

    try {
        const { username, password } = req.body
        const user = await User.create({ username: username, password: password })
        res.send(user)
    } catch (error) {
    }
}

const listusers = async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.send(users)
}

export { register, listusers }