/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Subtitle from '../../Generics/Subtitle';
import Title from '../../Generics/Title';
import { Arrow, Container } from './style';
import { useLocation } from 'react-router-dom';

const BreadCrumb = ({ children }) => {
  const [path, setPath] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setPath(
      typeof location.state.parent === 'string'
        ? location.state.parent.split(' ')
        : location.state.parent
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title={location.state?.parent}>
      {path.map((value) => {
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
