/* eslint-disable react/prop-types */
import { Arrow, Container } from './style';
import Title from '../Title';
import Subtitle from '../Subtitle';
import { useLocation } from 'react-router-dom';

const BreadCrumb = (props) => {
  const location = useLocation();

  return (
    <Container title={location.state?.parent}>
      <Title>{location.state?.parent}</Title>
      {location.state?.child && <Arrow />}
      <Subtitle>{location.state?.child}</Subtitle>
      <div
        style={{
          display: 'flex',
          marginLeft: 'auto',
          gap: '16px',
        }}
      >
        {props?.children}
      </div>
    </Container>
  );
};

export default BreadCrumb;
