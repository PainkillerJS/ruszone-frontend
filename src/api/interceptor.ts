import axios from 'axios';

import { getContentType } from './helper';

const instanse = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType()
});
