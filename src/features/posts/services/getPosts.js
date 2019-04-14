import apiFetch from '../../../helpers/apiFetch';

const getPosts = async () => apiFetch({ url: 'https://jsonplaceholder.typicode.com/todos' });

export default getPosts;
