import { useEffect, useState } from 'react';
import { fetchUsers } from '@api/users';
import { GitHubUser } from 'src/types/types';

interface GitHubUsersResponse {
  users: GitHubUser[];
  loading: boolean;
  error: Error | null;
}
const defaultUsersResponse: GitHubUsersResponse = {
  users: [],
  loading: true,
  error: null,
};

const useGetUsers = () => {
  const [response, setResponse] =
    useState<GitHubUsersResponse>(defaultUsersResponse);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setResponse({
          ...defaultUsersResponse,
          loading: true,
        });
        const resp = await fetchUsers();
        setResponse({
          users: resp.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setResponse({
          users: [],
          loading: false,
          error: error as Error,
        });
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  return { ...response };
};

export default useGetUsers;
