import { Request, Response } from 'express';

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
  }
}