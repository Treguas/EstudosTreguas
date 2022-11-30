import { checkSchema } from "express-validator";

export const editAction = checkSchema({
  access_token: { notEmpty: true },
  firstName: {
    optional: true,
    trim: true,
    notEmpty: true,
    isLength: {
      options: { min: 2 }
    },
    errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
  },
  lastName: {
    optional: true,
    trim: true,
    notEmpty: true,
    isLength: {
      options: { min: 2 }
    },
    errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
  },
  email: {
    optional: true,
    isEmail: true,
    errorMessage: 'E-mail inválido'
  },
  password: {
    // notEmpty: true,
    optional: true,
    isLength: {
      options: { min: 4 }
    },
    errorMessage: 'Senha precisa ter pelo menos 4 caracteres'
  },
  phone: {
    optional: true,
    notEmpty: true
  },
  address: { optional: true, notEmpty: true},
  neighborhood: { optional: true, notEmpty: true},
  locale: { optional: true, notEmpty: true},
  state: { 
    optional: true,
    isLength: {
      options: { min: 2 }
    },
    errorMessage: 'Estado precisa ter pelo menos 2 caracteres'
  },
  zipCode: { optional: true, notEmpty: true},
});