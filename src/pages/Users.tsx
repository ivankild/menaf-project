import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AsyncLoader from '../components/AsyncLoader';
import UserItem from '../components/UserItem';
import { User } from '../models/User';
import { Api } from '../utils/Api';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const usersApi = new Api<User>(User, 'users');

  useEffect(() => {
    (async () => {
      const result = await usersApi.getAll();
      setUsers(result);
      setIsLoading(false);
    })();
  }, []);

  return <Container>
    <h1>Users</h1>
    <AsyncLoader isLoading={isLoading}>
      <ul>
        {users.map(item => <UserItem user={item} key={item.id}/>)}
      </ul>
    </AsyncLoader>
  </Container>
}

export default Users;
