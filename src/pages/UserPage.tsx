import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AsyncLoader from '../components/AsyncLoader';
import { User } from '../models/User';
import { Api } from '../utils/Api';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const usersApi = new Api<User>(User, 'users');

  return <Container>
    <AsyncLoader
      loader={async () => await usersApi.get(parseInt(id, 10))}
      render={(user: User) => <Jumbotron>
        <h1>Name: {user.name}</h1>
        <h2>Id: {user.id}</h2>
      </Jumbotron>}
    />
  </Container>
}

export default UserPage;
