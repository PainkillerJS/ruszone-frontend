export const getContentType = () => ({
  'Content-Type': 'application/jspn'
});

export const errorCatch =
  () =>
  (error: any): string => {
    const message = error?.response?.data;

    if (message) {
      return typeof message === 'object' ? message[0] : message;
    }

    return error.message;
  };
