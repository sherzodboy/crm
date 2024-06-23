import { Outlet, useNavigate } from 'react-router-dom';
import {
  Body,
  Container,
  LogOut,
  Logo,
  Side,
  Wrapper,
  Menu,
  MenuItem,
  Arrow,
  ChildWrapper,
  LogOutIcon,
} from './style';
import Navbar from '../Navbar';
import Profile from './profile';
import sidebar from '../../utils/sidebar';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate('/');
  };
  const onLogOut = () => {
    navigate('/');
  };

  const onClickParent = (id) => {
    if (open.includes(id)) {
      let data = open.filter((val) => val !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
  };

  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Billion CRM</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id);
            const { icon: Icon } = parent;

            return (
              <div key={parent.id}>
                <MenuItem onClick={() => onClickParent(parent.id)}>
                  <MenuItem.Title>
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title>
                  {parent?.children?.length && <Arrow active={active} />}
                </MenuItem>
                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child?.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </div>
            );
          })}
        </Menu>
        <LogOut onClick={onLogOut}>
          <LogOutIcon /> Logout
        </LogOut>
      </Side>
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
