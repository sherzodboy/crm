/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom';
import { Container, Footer, Wrapper } from './style';
import GenericButton from '../Button';

const Modal = (props) => {
  return props?.open
    ? createPortal(
        <Container>
          <Wrapper>
            {props?.children}
            <Footer>
              {props?.onClose && (
                <GenericButton type="delete" onClick={props?.onClose}>
                  Delete
                </GenericButton>
              )}
              {props?.onSave && (
                <GenericButton type="save" onClick={props?.onSave}>
                  Save
                </GenericButton>
              )}
            </Footer>
          </Wrapper>
        </Container>,
        document.body
      )
    : null;
};

export default Modal;
