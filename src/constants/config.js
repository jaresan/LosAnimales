const baseUrl = process.env.NODE_ENV === 'development' ? 'https://los-animales-server.herokuapp.com' : 'https://los-animales-server.herokuapp.com';
export const API = {
  baseUrl,
  getAll: `${baseUrl}/list`,
  login: `${baseUrl}/user/login`,
  register: `${baseUrl}/user/signup`,
  addSpecies: `${baseUrl}/species/create`
};