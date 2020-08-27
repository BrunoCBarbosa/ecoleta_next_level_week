import db from '../database/connection';
import { Request, Response } from 'express';

export default class UsersController{
  async create(req: Request, res: Response){
    const {
      name,
      last_name,
      email,
      password,
      avatar
    } = req.body;

    const trx = await db.transaction();

    try {
      
      await trx('users').insert({
        name,
        last_name,
        email,
        password,
        avatar
      })

      await trx.commit()

      return res.status(201).json({
        message: 'User created sucessfull!'
      });
    } catch (error) {
      await trx.rollback();

      return res.status(400).json({
        error: 'unexpcted error white creating new user.'
      })
    }
  }

  async login(req: Request, res: Response){
    const{
      email,
      password
    } = req.body;

    try {
      const user = await db('users')
      .where('email', '=', email)
      .where('password', '=', password) 
  
      return res.status(200).json({
        message: 'User loged sucessfull!'
      });
    } catch (error) {
      
      return res.status(400).json({
        error: 'Error to login!'
      });
    }
  }
}

