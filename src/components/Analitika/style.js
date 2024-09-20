import styled from 'styled-components';
import getValue from '../../hooks/getStyleValue';
import Title from '../Generics/Title';
import arrowUp from '../../assets/icons/arrowUp.svg?react';

const getColor = (title) => {
  switch (title) {
    case 'Talabalar':
      return { primary: '#52C41A', secondary: '#B7EB8F', ternary: '#F6FFED' };
    case 'Mentorlar':
      return { primary: '#FADB14', secondary: '#FFE58F', ternary: '#FFFBE6' };
    case 'Filiallar':
      return { primary: '#1890FF', secondary: '#91D5FF', ternary: '#E6F7FF' };
  }
};

const Container = styled.div`
  padding: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, '16px')};
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 8px;
  padding: 24px 24px 0 24px;
  gap: ${({ gap }) => getValue(gap, '16px')};
  background-color: ${({ title }) => getColor(title)?.ternary};
`;
const Section = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  .icon {
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 6px;
    background-color: ${({ title }) => getColor(title)?.primary};
    margin-right: 16px;
    & path {
      fill: white;
    }
  }
  .subicon {
    margin-right: 10px;
  }
`;
const Plus = styled.div`
  &::before {
    content: '+';
    width: 32px;
    height: 32px;
    max-width: 32px;
    max-height: 32px;
    min-width: 32px;
    min-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    background-color: ${({ title }) => getColor(title)?.secondary};
  }
  &:active {
    transform: scale(0.92);
  }
`;
const Counter = styled(Title)`
  font-size: 28px;
`;
const Arrow = styled(arrowUp)`
  width: 24px;
  height: 24px;
  margin-right: 13px;
`;
const SubCard = styled(Card)`
  padding-bottom: 24px;
  border-radius: 8px;
  border: 2px solid #f0f0f0;
`;
const FooterWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 17px;
`;
FooterWrapper.Email = styled.div`
  flex: 2;
`;
FooterWrapper.Moliya = styled.div`
  flex: 1;
`;

export {
  Container,
  Wrapper,
  Card,
  Section,
  Plus,
  Counter,
  Arrow,
  SubCard,
  FooterWrapper,
};
