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
  & path {
    fill: orange;
  }
`;
Action.Move = styled(move)`
  width: 39px;
  height: 39px;
  padding: 10px;
  & path {
    fill: green;
  }
`;
Action.Delete = styled(deleteI)`
  width: 39px;
  height: 39px;
  padding: 10px;
  & path {
    fill: red;
  }
`;

export { Container, Action };
