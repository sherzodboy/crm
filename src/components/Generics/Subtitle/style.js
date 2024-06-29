import styled from 'styled-components';
import getValue from '../../../hooks/getStyleValue';

const Container = styled.div`
  display: inherit;
  align-items: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #253e5f;

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
