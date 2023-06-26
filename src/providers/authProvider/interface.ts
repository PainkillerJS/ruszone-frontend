import { NextPage } from 'next';

export interface RoleType {
  isOnlyUser?: boolean;
}

export type NextPageAuth<P = {}> = NextPage<P> & RoleType;

export interface ComponentAuthFieldsType {
  Component: RoleType;
}
