import { useLocation } from 'react-router-dom';
import { Container } from './style';
import BreadCrumb from '../../components/Generics/BreadCrumb';

const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <BreadCrumb />
      <div>{location.pathname} page</div>
      <div>Coming soon...</div>
    </Container>
  );
};

export default Generics;
