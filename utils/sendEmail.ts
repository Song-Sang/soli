import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'solijang.art@gmail.com';
const EMAIL_TEMPLATE_ID = 'template_a5jrpda';
const EMAIL_PUBLIC_KEY = '4sxm1bpHXvybwdGyt';

export const sendEmail = async (formElement: HTMLFormElement) => {
  try {
    await emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formElement, {
      publicKey: EMAIL_PUBLIC_KEY,
    });
    toast.success('send message completed', { autoClose: 2000 });
  } catch (error) {
    toast.error('send message failed', { autoClose: 2000 });
  }
};
