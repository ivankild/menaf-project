import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { User } from '../models/User';

const UserItem = (props: { user: User }) => {
  const { user } = props;
  return <li>
    <LinkContainer to={'/users/' + user.id.toString()}>
      <Button variant="link">{user.id.toString()}: {user.name}</Button>
    </LinkContainer>
  </li>
}

export default UserItem;
