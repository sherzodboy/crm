import styled from 'styled-components';
import getValue from '../../../hooks/getStyleValue';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 24px;
  color: ${({ color }) => (color ? color : '#253e5f')};
  font-size: ${({ size }) => (size ? getValue(size) : '16px')};

  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};

  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;

const Counter = styled.div`
  width: 28px;
  height: 28px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: #1890ff;
  color: white;
  border-radius: 50%;
  margin-left: 8px;
`;

export { Container, Counter };
