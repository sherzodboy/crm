import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  inset: 0;

  background-color: #253e5f80;
  z-index: 999;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 900px;
  min-width: 500px;
  width: fit-content;
  height: auto;
  background-color: white;
  border-radius: 8px;
  padding: 32px 48px;

  max-height: 90%;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export { Container, Wrapper, Footer };
