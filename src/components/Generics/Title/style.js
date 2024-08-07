import styled from 'styled-components';
import getValue from '../../../hooks/getStyleValue';

const Container = styled.div`
  display: flex;
  align-items: inherit;
  font-weight: ${({ type }) => (!type ? 600 : 400)};
  font-size: ${({ size }) => (size ? getValue(size) : '20p')};
  line-height: 28px;
  text-align: left;

  color: ${({ color }) => (color ? color : 'var(--primaryColor)')};

  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};

  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;

export { Container };
