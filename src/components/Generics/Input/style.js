import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--secondaryColor);
  border-radius: 8px;
  flex: 1;
  overflow: hidden;
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  width: ${({ width }) =>
    width && (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ height }) =>
    height && (typeof height === 'string' ? height : `${height}px`)};
  max-width: ${({ width }) =>
    width && (typeof width === 'string' ? width : `${width}px`)};
`;
const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  width: ${({ width }) =>
    width && (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ height }) =>
    height && (typeof height === 'string' ? height : `${height}px`)};
  max-width: ${({ width }) =>
    width && (typeof width === 'string' ? width : `${width}px`)};
  font-size: ${({ fontSize }) =>
    fontSize && (typeof fontSize === 'string' ? fontSize : `${fontSize}px`)};
  font-weight: ${({ fontWeight }) =>
    fontWeight &&
    (typeof fontWeight === 'string' ? fontWeight : `${fontWeight}px`)};
  line-height: ${({ lineHeight }) =>
    lineHeight &&
    (typeof lineHeight === 'string' ? lineHeight : `${lineHeight}px`)};
  color: ${({ color }) => (color ? color : '#bbc3cd')};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  line-height: 20px;

  &::placeholder {
    color: #bbc3cd;
  }
`;

export { Container, Input };
