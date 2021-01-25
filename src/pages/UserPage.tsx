import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { User } from '../models/User';
import { Api } from '../utils/Api';

const UserPage = () => {
  const [user, setUser] = useState<User>();
  const usersApi = new Api<User>(User, 'users');
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const result = await usersApi.get(parseInt(id, 10));
      setUser(result);
    })();
  });

  return <Container>
    <h1>Name: {user?.name}</h1>
    <h2>Id: {user?.id}</h2>
  </Container>
}

export default UserPage;
