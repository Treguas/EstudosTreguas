import { validationResult, matchedData } from "express-validator";
import {Request, Response} from 'express';
import {prisma} from '../prisma';
import * as bcrypt from 'bcrypt';

export const getInfo = async (req: Request, res: Response) => {
  const access_token = req.query.access_token as string;
  try {
    //achar usuario baseado no token
    let user = await prisma.user.findFirst({
      where: { token: access_token}
    });
    
    res.status(201).json({
      "firstName": user?.firstName,
      "lastName": user?.lastName,
      "avatar": user?.avatarUrl,
      "phone": user?.phone,
      "address": user?.address,
      "neighborhood": user?.neighborhood,
      "locale": user?.locale,
      "state": user?.state,
      "zipCode": user?.zipCode,
      "token": user?.token,
    });
    
  } catch (error) {
    res.sendStatus(500);
  }
}

export const editInfo = async (req: Request, res: Response) => {
  const access_token = req.query.access_token as string;
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(500).json({error: errors.mapped()});
    return;
  }
  const data = matchedData(req);
  try {
    //achar usuario baseado no token
    let user = await prisma.user.findFirst({
      where: { token: access_token}
    });
    //REMOVER TOKEN PARA NÃO ATUALIZAR O TOKEN NO BD
    delete data.access_token;

    //verificar se existe email no bd
    if(data.email) {
      const emailCheck = await prisma.user.findUnique({
        where: {
          email: data.email
        }
      })
      if(emailCheck) {
        res.status(500).json({error: 'Email já existente'})
        return;
      }
    }

    if(data.password) {
      const passwordHash = await bcrypt.hash(data.password, 10);
      data["password"] = passwordHash
    }

    const updateUser = await prisma.user.update({
      where: {
        userId: user?.userId,
      },
      data,
    })

    res.status(201).json({ret: 'Dados alterados com sucesso!'})
  } catch (error) {
    res.sendStatus(500);
  }
}

// export const createUser = async (req: Request, res: Response) => {
//   const {nome, email} = req.body;

//   try {
//     const user = await prisma.user.create({
//       data: {
//         nome,
//         email
//       }
//     });
//     return res.status(201).json({ data: user });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({error: err});
//   }
// };


// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await prisma.user.findMany();

//     return res.status(201).json({ data: users});
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({error: err})
//   }  
// }



// export async function getUser(req: Request, res: Response)
// {
//   const { access_token } = req.body;
//   try {

//     const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${access_token}`
//       }
//     });

//     const userData:IUserGoogle = await userResponse.json();

//     let user = await prisma.user.findUnique({
//       where: {
//         googleId: userData.id,
//       }
//     })

//     if(!user) {
//       user = await prisma.user.create({
//         data: {
//           googleId: userData.id,
//           name: userData.name,
//           email: userData.email,
//           avatarUrl: userData.avatarUrl,
//         }
//       })
//     }

//     return res.status(201).json({ data: user});
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({error: err})
//   }  
// }

// export const getUserProfile = async (req: Request, res: Response) => {
//   const identifier = req.params.id
//   try {

//     const profile = await prisma.profile.findUnique({ where: { userEmail: identifier } });

//     return res.status(201).json({ data: profile});
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({error: err})
//   }  
// }
