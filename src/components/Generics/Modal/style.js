import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  inset: 0;

  background-color: #253e5f80;
  z-index: 22222;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 11%;
  left: 50%;
  transform: translate(-50%);
  max-width: 900px;
  min-width: 300px;
  width: fit-content;
  height: auto;
  background-color: white;
  border-radius: 8px;
  padding: 32px 48px;
`;

export { Container, Wrapper };
