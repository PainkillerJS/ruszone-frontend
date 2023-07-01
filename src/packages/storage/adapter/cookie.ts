import Cookies from 'js-cookie';

export const getCookieValue = (name: string) => Cookies.get(name);

export const setCookieValue = (name: string, value: string) => Cookies.set(name, value);

export const removeCookieValue = (name: string) => Cookies.remove(name);
