import styled from 'styled-components';

import edit from '../../../assets/icons/edit.svg?react';
import deleteI from '../../../assets/icons/delete.svg?react';
import move from '../../../assets/icons/action.svg?react';

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
Action.Move = styled(move)`
  width: 39px;
  height: 39px;
  padding: 10px;
  &:hover {
    & path {
      fill: green;
    }
  }
`;
Action.Delete = styled(deleteI)`
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
const Devider = styled.div`
  display: flex;
  margin-top: 16px;
`;

Devider.Role = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  &:last-child {
    margin-bottom: 20px;
  }
`;
Devider.Filiallar = styled.div`
  flex: 1;
`;

Devider.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #253e5f80;
`;

const Section = styled.div`
  display: flex;
  padding: 12px 0;
  margin-top: 2px;
`;
export { Container, Action, ModalRow, TextArea, Devider, Section };
