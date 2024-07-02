/* eslint-disable react/prop-types */

import { Container, Counter } from './style';

const Subtitle = (props) => {
  return (
    <Container {...props}>
      {props?.children} {props?.count && <Counter>{props.count}</Counter>}{' '}
    </Container>
  );
};

export default Subtitle;
