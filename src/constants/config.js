const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://los-animales-server.herokuapp.com';
export const API = {
  baseUrl,
  getAll: `${baseUrl}/list`
};