import { useRouteError } from 'react-router-dom';
import { Wrapper } from './styles';

type ExceptedError = {
  status: number;
};

export default function Error() {
  const { status } = useRouteError() as ExceptedError;

  if (status === 404) {
    return <Wrapper>404 • Page not found</Wrapper>;
  }
}
