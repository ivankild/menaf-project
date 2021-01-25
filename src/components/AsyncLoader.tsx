import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AsyncLoader: React.FC<{ isLoading: boolean }> = (props) => {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, [])

  if (!didMount) {
    return null;
  }

  if (props.isLoading) {
    return <Spinner animation="border" variant="primary"/>
  }

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default AsyncLoader;
