const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

export const validateEmail = (email: string) => {
  return emailRegex.test(email);
};
