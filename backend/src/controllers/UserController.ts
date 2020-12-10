import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: 'Valdir Silva',
    email: 'val@mail.com'
  },
  {
    name: 'Julia Felix',
    email: 'julia@MediaList.com'
  }
]

export default {
  
  async index (req: Request, res: Response) {
    return res.status(200).json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { 
        name: 'Lila', 
        email: 'lila@mail.com' 
      }, 
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem-vindo' 
      }
    });

    res.status(200).json({ data: 'Success' });
  }
};
