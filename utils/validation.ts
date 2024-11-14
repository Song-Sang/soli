export interface ValidationErrors {
  name: string;
  email: string;
  message: string;
}

const isEmailValid = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validateFields = (
  name: string,
  email: string,
  message: string
): ValidationErrors => {
  const errors: ValidationErrors = { name: '', email: '', message: '' };

  if (name.trim() === '') {
    errors.name = '* Please enter your name.';
  }

  if (email.trim() === '') {
    errors.email = '* Please enter your e-mail.';
  } else if (!isEmailValid(email)) {
    errors.email = '* Please check your email.';
  }

  if (message.trim() === '') {
    errors.message = '* Please enter a message.';
  }

  return errors;
};
