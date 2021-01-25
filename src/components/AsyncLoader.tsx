import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const AsyncLoader: React.FC<{ loader: () => Promise<any>; render: (result: any) => JSX.Element }> = (props) => {
  const [didMount, setDidMount] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);
  const [result, setResult] = useState<JSX.Element>();

  const load = async () => {
    try {
      setIsLoading(true);
      setError(false);
      setResult(await props.loader());
    } catch (e) {
      console.error(e);
      setError(e)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setDidMount(true);
    load();
    return () => setDidMount(false);
  }, [])

  if (!didMount) {
    return null;
  }

  if (isLoading) {
    return <Spinner animation="border" variant="primary"/>
  }

  if (error) {
    return <h1>
      Error! See developer console.
      <Button variant="primary"
              onClick={() => load()}
              disabled={isLoading}>Reload</Button>
    </h1>
  }
  return props.render(result);
}

export default AsyncLoader;
