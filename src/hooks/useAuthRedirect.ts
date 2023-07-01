import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAuth } from './useAuth';

export const useAuthRedirect = () => {
  const { user } = useAuth();

  const { replace } = useRouter();

  useEffect(() => {
    if (!user) {
      replace('/');
    }
  }, [user]);
};
