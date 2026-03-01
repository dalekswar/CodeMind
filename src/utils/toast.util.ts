import toast from 'react-hot-toast';

export function singleToasts(message: string, type: 'success' | 'error' = 'success') {
  toast.dismiss();
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
  }
}
