import { type FC, type PropsWithChildren, useEffect } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { getAccessToken } from '@/packages/api/rest/auth/helpers';
import { CookieFieldEnum } from '@/store/user/interface';

import type { ComponentAuthFieldsType } from './interface';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<ComponentAuthFieldsType>> = ({
  Component: { isOnlyUser },
  children
}) => {
  const { pathname } = useRouter();
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();

  useEffect(() => {
    const accessToken = getAccessToken();

    if (accessToken) {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get(CookieFieldEnum.REFRESH_TOKEN);

    if (!refreshToken && user) {
      logout();
    }
  }, [pathname]);

  return isOnlyUser ? (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
