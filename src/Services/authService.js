import api from './api';

const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    throw error;
  }
};

const logout = () => {
  
  console.log('User logged out');
};

const checkAuthStatus = () => {
  
  return !!localStorage.getItem('authToken');
};

export { login, logout, checkAuthStatus };
