import { toast } from 'react-toastify';

export const copyURL = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast.success('URL copy completed', { autoClose: 2000 });
  } catch (err) {
    toast.error('URL copy failed', { autoClose: 2000 });
  }
};
