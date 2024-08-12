import styled from 'styled-components';

import edit from '../../../assets/icons/edit.svg?react';
import deleteI from '../../../assets/icons/delete.svg?react';
import move from '../../../assets/icons/action.svg?react';
import keldi from '../../../assets/icons/keldi.svg?react';
import sababli from '../../../assets/icons/sababli.svg?react';
import sababsiz from '../../../assets/icons/sababsiz.svg?react';
import birinchi from '../../../assets/icons/birinchi.svg?react';

export const Icon = styled.div``;
Icon.Keldi = styled(keldi)``;
Icon.Sababsiz = styled(sababsiz)``;
Icon.Sababli = styled(sababli)``;
Icon.Birinchi = styled(birinchi)``;

const Container = styled.div``;
const Action = styled.div`
  display: flex;
  z-index: 9999;
  justify-content: flex-end;
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
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 2px solid #f0f0f0;
  background-color: white;
  border-radius: 8px;
  transform: translate(-50%, 15%);
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;
const Arrow = styled.div`
  border: 1px solid #f0f0f0;
  width: 32px;
  height: 32px;
  align-self: center;
  transform: rotate(45deg);
  margin-top: -16px;
  background-color: white;
  border-color: #f0f0f0 transparent transparent #f0f0f0;
`;
const StatusWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  &:hover {
    background-color: #f8fafc;
  }
`;
export const Devider = styled.div`
  display: flex;
  margin-top: 16px;
`;

Devider.Role = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  /*
  border: 1px solid #91d5ff;
   border-left: 0;
  border-radius: 0px 8px 8px 0px; */
`;
Devider.Filiallar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 8px;
`;

Devider.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #253e5f80;
`;

export const Section = styled.div`
  display: flex;
  /* padding: 12px 0; */
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 4px 0 0 4px;
  background-color: #f8fafc;
  height: 40px;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  border: 2px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
  border-radius: 0px 4px 4px 0px;
  padding-left: 15px;
`;

export {
  Container,
  Action,
  ModalRow,
  TextArea,
  ModalContainer,
  Arrow,
  StatusWraper,
};
