import styled from 'styled-components';
import arrow from '../../assets/icons/rightArrow.svg?react';
import arrowUp from '../../assets/icons/arrowUp.svg?react';

const Wrapper = styled.div`
  padding: 24px;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Fragment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ mt = 0, mr = 0, mb = 0, ml = 0 }) =>
    `${mt}px ${mr}px ${mb}px ${ml}px`};
`;
const ArrowIcon = styled(arrow)`
  transform: ${({ left }) => left && 'rotate(180deg)'};
  cursor: pointer;
  &:active {
    & path {
      fill: var(--primaryColor);
    }
  }
`;
const DateCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-direction: column;
  width: 48px;
  height: 72px;
  border: 1px solid #f0f0f0;
  border-radius: 24px;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? 'var(--activeColor)' : 'white'};
`;
const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ green }) => (green ? '#a0d911' : '#D3ADF7')};
  margin-right: 10px;
`;
const Arrow = styled(arrowUp)`
  width: 24px;
  height: 24px;
  font-weight: 400;
  margin-right: 8px;
`;

export { Wrapper, Section, Fragment, ArrowIcon, DateCard, Circle, Arrow };
