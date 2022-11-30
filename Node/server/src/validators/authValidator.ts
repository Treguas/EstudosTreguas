import { checkSchema } from "express-validator";

export const signInValidator = checkSchema({
  email: {
    isEmail: true,
    errorMessage: 'E-mail inválido'
  },
  password: {
    // notEmpty: true,
    isLength: {
      options: { min: 4 }
    },
    errorMessage: 'Senha precisa ter pelo menos 4 caracteres'
  },
});

export const signUpValidator = checkSchema({
    firstName: {
      trim: true,
      notEmpty: true,
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    lastName: {
      trim: true,
      notEmpty: true,
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    email: {
      isEmail: true,
      errorMessage: 'E-mail inválido'
    },
    password: {
      // notEmpty: true,
      isLength: {
        options: { min: 4 }
      },
      errorMessage: 'Senha precisa ter pelo menos 4 caracteres'
    },
    phone: {
      notEmpty: true
    },
    address: { notEmpty: true},
    neighborhood: { notEmpty: true},
    locale: { notEmpty: true},
    state: { 
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Estado precisa ter pelo menos 2 caracteres'
    },
    zipCode: { notEmpty: true},
  });
