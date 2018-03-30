import axios from 'axios';
import api from './apiUrl';

const url = `${api}/github`;

export default () => axios.get(url);
