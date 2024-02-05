import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f9b12-default-rtdb.firebaseio.com/'
});

export default instance;