import styled from 'styled-components';
import getValue from '../../../hooks/getStyleValue';

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--secondaryColor);
  border-radius: 8px;
  flex: 1;
  border-radius: ${({ br }) => getValue(br)};
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height, '40px')};
  max-width: ${({ width }) => getValue(width)};
  overflow: hidden;
  margin-bottom: ${({ mb }) => getValue(mb)};
`;
const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height, '40px')};
  max-width: ${({ width }) => getValue(width)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => getValue(fontWeight)};
  line-height: ${({ lh }) => getValue(lh)};
  color: ${({ color }) => (color ? color : '#bbc3cd')};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
  line-height: 20px;
  padding-left: ${({ pl }) => getValue(pl)};

  &::placeholder {
    color: #bbc3cd;
  }
`;

export { Container, Input };
