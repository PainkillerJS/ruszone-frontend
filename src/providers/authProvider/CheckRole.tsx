import { FC, PropsWithChildren } from 'react';

import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/useAuth';

import type { ComponentAuthFieldsType } from './interface';

const CheckRole: FC<PropsWithChildren<ComponentAuthFieldsType>> = ({
  Component: { isOnlyUser },
  children
}) => {
  const router = useRouter();
  const { user } = useAuth();

  if (user && isOnlyUser) {
    return <>{children}</>;
  }

  if (router.pathname !== '/auth') {
    router.replace('/auth');
  }

  return null;
};

export default CheckRole;
