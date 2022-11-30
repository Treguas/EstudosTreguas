// import { getUser } from './../controllers/userController';
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../prisma';

export const authorization = async (req: Request, res: Response, next: NextFunction) => {

  const { access_token } = req.body;

  if(!access_token) {
    res.status(500).json({ notallowed: true});
    return;
  }
  
  if(access_token == '') {
    res.status(500).json({ notallowed: true});
    return;
  }

  //achar usuario baseado no token
  let user = await prisma.user.findFirst({
    where: { token: access_token}
  })

  if(!user) {
    res.status(500).json({ notallowed: true});
    return;
  }

  next();
}