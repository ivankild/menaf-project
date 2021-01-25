import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AsyncLoader from '../components/AsyncLoader';
import { User } from '../models/User';
import { Api } from '../utils/Api';

const UserPage = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const usersApi = new Api<User>(User, 'users');
      const result = await usersApi.get(parseInt(id, 10));
      setUser(result);
      setIsLoading(false);
    })();
  });

  return <Container>
    <AsyncLoader isLoading={isLoading}>
      <h1>Name: {user?.name}</h1>
      <h2>Id: {user?.id}</h2>
    </AsyncLoader>
  </Container>
}

export default UserPage;
