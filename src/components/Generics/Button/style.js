import styled from 'styled-components';
import filter from '../../../assets/icons/filter.svg?react';
import imp from '../../../assets/icons/import.svg?react';
import add from '../../../assets/icons/add.svg?react';

export const Icons = styled.div``;

Icons.Filter = styled(filter)`
  & path {
    fill: white;
  }
`;
Icons.Import = styled(imp)``;
Icons.Add = styled(add)``;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid #1890ff;
  border-radius: 8px;
  color: var(--primaryColor);
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  gap: 8px;
  white-space: nowrap;

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }

  -webkit-user-select: none; /* Safari */
  user-select: none; /* Standard syntax */
`;

Button.Import = styled(Button)`
  border: none;
  background-color: white;
`;

Button.Add = styled(Button)`
  border: none;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#1890ff')};
  color: white;
`;

Button.Filter = styled(Button)`
  border: none;
  background-color: var(--primaryColor);
  color: white;
`;

Button.Primary = styled(Button)`
  border: none;
  background-color: #1890ff;
  color: #f8fafc;
`;

Button.Delete = styled(Button)`
  border-color: #ffa39e;
  /* border: none; */
  color: #f5222d;
  transition: 0.2s all linear;
  &:hover {
    background-color: red;
    color: white;
  }
`;

export { Button };

export default Button;
