import styled from 'styled-components';
import arrow from '../../../assets/icons/rightArrow.svg?react';

const getColor = ({ title }) => {
  switch (title) {
    case 'Lidlar':
      return '#F0F5FF';
    case 'Moliya':
      return '#FFF2E8';
    case 'Talabalar':
      return '#F9F0FF';
    case 'Guruhlar':
      return '#FCFFE6';
    case 'Kurslar':
      return '#E6FFFB';
    case 'HR':
      return '#FFF0F6';
    case 'Sozlamalar':
      return '#FFF2E8';
    default:
      return '#FCFFE6';
  }
};

const Container = styled.div`
  border-radius: 8px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${getColor};
  margin-bottom: 32px;
`;
const Arrow = styled(arrow)`
  display: flex;
`;
export { Container, Arrow };
