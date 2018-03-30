import axios from 'axios';
import blogUrl from './blogUrl';

const URL = blogUrl + '/last-post.json';

export default function getLatestPost() {
    return axios.get(URL)
    .then((response) => {
        response.data.url = blogUrl + response.data.href;
        return response.data;
    });
}

