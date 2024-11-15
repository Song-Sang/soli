export interface ValidationErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const isEmailValid = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validateFields = (
  name: string,
  email: string,
  phone: string,
  message: string
): ValidationErrors => {
  const errors: ValidationErrors = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  if (name.trim() === '') {
    errors.name = '* please enter your name.';
  }

  if (email.trim() === '') {
    errors.email = '* please enter your e-mail.';
  } else if (!isEmailValid(email)) {
    errors.email = '* please check your email.';
  }

  if (!/^[0-9- +]*$/.test(phone.trim())) {
    errors.phone = '* please only numbers, hyphens, spaces, or plus signs';
  }

  if (message.trim() === '') {
    errors.message = '* please enter a message.';
  }

  return errors;
};
