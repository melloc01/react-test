import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_API_URL = 'http://rhamnusia.com.br/dev3/wp-json/wp/v2';

export function fetchPosts() {

    const request = axios.get(`${ROOT_API_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPost(id) {

    const request = axios.get(`${ROOT_API_URL}/posts/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}
