import styled from 'styled-components';
import search from '../../assets/icons/search.svg?react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 60px;
  padding: 0 16px 0 24px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--secondaryColor);
  width: fit-content;
  border-radius: 8px;
  padding: 2px;
  height: 40px;
  flex: 1;
  max-width: 500px;
`;
const Input = styled.input`
  flex: 1;
  max-width: 500px;
  outline: none;
  border: none;
  height: 38px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #bbc3cd;
  &::placeholder {
    color: #bbc3cd;
  }
`;
const SearchIcon = styled(search)`
  margin: 0 16px;
`;
// right navbar && time wrapper
const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Timer = styled.div`
  color: ${({ status }) =>
    status ? 'var(--secondaryColor)' : 'var(--primaryColor)'};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  padding: 4px;
`;

export { Container, InputWrapper, Input, SearchIcon, Section, Timer };
