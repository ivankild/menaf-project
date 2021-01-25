import React from 'react';
import { Container } from 'react-bootstrap';
import AsyncLoader from '../components/AsyncLoader';
import UserItem from '../components/UserItem';
import { User } from '../models/User';
import { Api } from '../utils/Api';

const Users = () => {
  const usersApi = new Api<User>(User, 'users')
  return <Container>
    <h1>Users</h1>
    <AsyncLoader
      loader={async () => await usersApi.getAll()}
      render={(users: User[]) => <ul>
        {users.map(item => <UserItem user={item} key={item.id}/>)}
      </ul>}
    />
  </Container>
}

export default Users;
