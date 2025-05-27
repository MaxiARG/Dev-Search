import { useEffect, useState } from 'react';
import { fetchUsers } from '@api/users';
import { defaultUsersResponse, GitHubUsersResponse } from 'src/types/types';
import useDefaultUserListAtom from 'src/common-atoms/useDefaultUserListAtom';

const useGetUsers = () => {
  const [response, setResponse] =
    useState<GitHubUsersResponse>(defaultUsersResponse);
  const { userListAtom, setDefaultUserListAtom } = useDefaultUserListAtom();

  useEffect(() => {
    const getUsers = async () => {
      try {
        // This will cache the response, so it won't fetch again if the atom is already set
        if (!userListAtom || userListAtom.length === 0) {
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
          setDefaultUserListAtom(resp.data);
        }
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

  return { ...response, userListAtom };
};

export default useGetUsers;
