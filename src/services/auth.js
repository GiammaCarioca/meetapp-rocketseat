// export const isAuthenticated = () => false;

// export const isAuthenticated = () => {
//   if (localStorage.getItem('TOKEN')) {
//     return true;
//   }
//   return false;
// };

export const TOKEN_KEY = '@meetapp-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
