import { Arrow, Container } from './style';
import Title from '../Title';
import Subtitle from '../Subtitle';
import { useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Container title={location.state?.parent}>
      <Title>{location.state?.parent}</Title>
      {location.state?.child && <Arrow />}
      <Subtitle>{location.state?.child}</Subtitle>
    </Container>
  );
};

export default BreadCrumb;
