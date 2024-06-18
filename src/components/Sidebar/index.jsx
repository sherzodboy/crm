import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import { Body, Container, Side, Wrapper } from './style';

const Sidebar = () => {
  return (
    <Container>
      <Side>Sidebar</Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};

export default Sidebar;
