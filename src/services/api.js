import axios from 'axios';


//https://api.hgbrasil.com/weather?key=89d2d2c7&lat=-23.682&lon=-46.875

export const key = '89d2d2c7';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;