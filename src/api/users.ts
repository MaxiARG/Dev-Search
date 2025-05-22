//https://api.github.com/users
//https://api.github.com/search/users?q={term}
//https://api.github.com/users/{Busername}
import { AxiosResponse } from 'axios';
import { GitHubUser } from '../types/types';
import { getAxiosInstance } from './AxiosConfig';

/**
 * 
 * @param userName optional. If exists, indicates the exact username.
 * @returns GitHubUser[]
 */
const fetchUsers = (userName: string = ''): Promise<AxiosResponse<GitHubUser[], void>> => {
    const query = userName ? `/${userName}` : '';
    return getAxiosInstance().get<GitHubUser[]>(`/users${query}`);
};


export { fetchUsers }