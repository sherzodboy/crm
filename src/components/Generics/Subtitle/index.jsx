/* eslint-disable react/prop-types */

import { Container } from './style';

const Subtitle = (props) => {
  return <Container {...props}>{props?.children}</Container>;
};

export default Subtitle;
