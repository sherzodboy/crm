import styled from 'styled-components';
import edit from '../../../assets/icons/edit.svg?react';
import deleteI from '../../../assets/icons/delete.svg?react';

const Container = styled.div``;
const Action = styled.div`
  display: flex;
  z-index: 9999;
`;

Action.Edit = styled(edit)`
  width: 39px;
  height: 39px;
  padding: 10px;
  &:hover {
    & path {
      fill: orange;
    }
  }
`;
Action.Move = styled(deleteI)`
  width: 39px;
  height: 39px;
  padding: 10px;
  &:hover {
    & path {
      fill: red;
    }
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 4px;
  color: #929faf;
  &::placeholder {
    color: #929faf;
  }
  border-color: #929faf;
`;
const ModalRow = styled.div`
  margin-bottom: 18px;
`;

export { Container, Action, ModalRow, TextArea };
