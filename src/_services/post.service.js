import config from 'config';
import { authHeader } from '../_helpers';

export const postService = {
  getAll
};

function getAll() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch(`${config.apiUrl}/api/posts`, requestOptions).then(handleResponse);
}