/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom';
import { Container, Wrapper } from './style';

const Modal = (props) => {
  return props?.open
    ? createPortal(
        <Container>
          <Wrapper>{props?.children}</Wrapper>
        </Container>,
        document.body
      )
    : null;
};

export default Modal;
