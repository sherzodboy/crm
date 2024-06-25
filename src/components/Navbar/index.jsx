import GenericSelect from './Select';
import Time from './Time';
import { Container, Input, InputWrapper, SearchIcon, Section } from './style';

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search" />
      </InputWrapper>
      <Section>
        <Time />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
