import { Flip, toast, ToastOptions } from 'react-toastify';

export const callToast = (text: string, options?: ToastOptions | undefined | null) => {
  toast(text, {
    pauseOnHover: true,
    closeOnClick: true,
    delay: 150,
    draggable: true,
    transition: Flip,
    ...options,
  });
};

export default callToast;
