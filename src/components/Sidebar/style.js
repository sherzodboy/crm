import styled from 'styled-components';
import arrow from '../../assets/icons/rightArrow.svg?react';
import logout from '../../assets/icons/exit.svg?react';
import { NavLink } from 'react-router-dom';

const Arrow = styled(arrow)`
  display-flex;
  margin-left: auto;
  transform: ${({ active }) => active === 'true' && 'rotate(90deg)'};
  transition: all 0.1s;
`;
const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Body = styled.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  margin: 16px;
  background-color: white;
  border-radius: 8px;
  // border: 2px solid red;
`;
const Logo = styled.div`
  position: sticky;
  top: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #1890ff;
  padding: 16px 24px;
  cursor: pointer;
  border-bottom: 1px solid #dfebf6;
  z-index: 999;
  background-color: white;
`;
const LogOut = styled.div`
  font-weight: 500;
  line-height: 20px;
  color: #253e5f;
  padding: 16px 24px;
  font-size: 14px;
  border-top: 1px solid #dfebf6;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: white;
  &:hover {
    color: red;
    & path {
      fill: red;
    }
  }
`;

// Profile
const ProfileContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 23px 24px 32px 24px;
`;

ProfileContainer.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;
ProfileContainer.Name = styled.div`
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: var(--prinaryColor);
  white-space: nowrap;
  width: 168px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
ProfileContainer.Email = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: var(--secondaryColor);
  white-space: nowrap;
  width: 168px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Menu
const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-right: 24px;
  color: ${({ active }) =>
    active === 'true' ? 'var(--activeColor)' : 'var(--primaryColor)'};
  background-color: ${({ active }) =>
    active === 'true' ? '#f7f9fb' : 'inherit'};

  &:hover {
    cursor: pointer;
    background-color: #f7f9fb;
    color: var(--activeColor);

    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === 'true' && 'var(--activeColor)'};
  }
`;
MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
  padding: 12px 0 12px 24px;

  .icon {
    margin-right: 16px;
  }
`;

const LogOutIcon = styled(logout)`
  margin-right: 16px;
`;
const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active === 'true' ? 'auto' : '0px')};
  overflow: hidden;
`;

export {
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  Menu,
  MenuItem,
  Arrow,
  LogOutIcon,
  ChildWrapper,
};
