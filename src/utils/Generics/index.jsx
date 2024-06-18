import { useLocation } from 'react-router-dom';
import { Container } from './style';

const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <div>{location.pathname}</div>
      <div>Coming soon...</div>
    </Container>
  );
};

export default Generics;
