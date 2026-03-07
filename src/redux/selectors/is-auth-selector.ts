import { useAppSelector } from '../hooks';

export const useIsAuthSelector = () => Boolean(useAppSelector((state) => state.user.accessToken));
