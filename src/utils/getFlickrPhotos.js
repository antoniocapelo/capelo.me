import axios from 'axios';
import api from './apiUrl';

const url = `${api}/flickr`;

export default () => axios.get(url);
