//https://api.github.com/users
//https://api.github.com/search/users?q={term}
//https://api.github.com/users/{Busername}
import { AxiosResponse } from 'axios';
import { GitHubUser, User } from '../types/types';
import { getAxiosInstance } from './AxiosConfig';

/**
 * Fetch general list of GitHub users (first 30 users).
 */
const fetchUsers = (): Promise<AxiosResponse<GitHubUser[]>> => {
  return getAxiosInstance().get('/users');
};

/**
 * Search users by term.
 */
const searchUsers = (
  term: string,
): Promise<AxiosResponse<{ items: GitHubUser[] }>> => {
  return getAxiosInstance().get(`/search/users?q=${term}`);
};

/**
 * Get a single user by exact username.
 */
const getUserByUsername = (username: string): Promise<AxiosResponse<User>> => {
  return getAxiosInstance().get(`/users/${username}`);
};

export { fetchUsers, searchUsers, getUserByUsername };
