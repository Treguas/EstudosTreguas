import { validationResult, matchedData } from "express-validator";
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import { prisma } from "../prisma";

export const signIn = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(500).json({error: errors.mapped()});
    return;
  }
  const data = matchedData(req);
  // console.log(data);
  
  //Validating email
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    }
  });

  if(!user) {
    res.status(500).json({error: 'Usuário | Senha não confere!'});
    return;
  }

  //Validating password
  const match = await bcrypt.compare(data.password, user.password);
  if(!match) {
    res.status(500).json({error: 'Usuário | Senha não confere!'});
    return;
  }

  const payload = (Date.now() + Math.random()).toString();
  const newToken = await bcrypt.hash(payload, 10);

  const updatedUser = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      token: newToken
    }
  });

  res.status(201).json({token: newToken, email: data.email});
}

export const signUp = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(500).json({error: errors.mapped()});
    return;
  }
  const data = matchedData(req);

  let user = await prisma.user.findUnique({
    where: {
      email: data.email,
    }
  });

  if (user) {
    res.status(500).json({error: 'Usuário já existe!'});
    return;
  }

  const passwordHash = await bcrypt.hash(data.password, 10);
  const payload = (Date.now() + Math.random()).toString();
  const token = await bcrypt.hash(payload, 10);

  const newUser = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: passwordHash,
      phone: data.phone,
      address: data.address,
      neighborhood: data.neighborhood,
      locale: data.locale,
      state: data.state,
      zipCode: data.zipCode,
      token
    }
  })

  res.status(201).json({token});
}