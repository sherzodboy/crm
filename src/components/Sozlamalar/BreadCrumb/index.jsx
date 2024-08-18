/* eslint-disable react/prop-types */
import Subtitle from '../../Generics/Subtitle';
import Title from '../../Generics/Title';
import { Arrow, Container } from './style';
import { useLocation } from 'react-router-dom';

const BreadCrumb = ({ children }) => {
  const location = useLocation();

  return (
    <Container title={location.state?.parent}>
      {location.state?.parent?.map((value) => {
        return (
          <Title key={value}>
            {value} <Arrow />
          </Title>
        );
      })}
      <Subtitle>{location.state?.child}</Subtitle>
      <div style={{ display: 'flex', marginLeft: 'auto' }}>{children}</div>
    </Container>
  );
};

export default BreadCrumb;
