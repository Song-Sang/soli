import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'sshk0123@gmail.com';
const EMAIL_TEMPLATE_ID = 'template_9z1zrke';
const EMAIL_PUBLIC_KEY = 'h1j74hFEHN8pIa52V';

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
