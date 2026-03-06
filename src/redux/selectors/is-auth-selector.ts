import { useAppSelector } from '../hooks';

export const useIsAuth = () => useAppSelector((state) => state.user.accessToken);
