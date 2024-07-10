import Input from '../Generics/Input';
import DateTime from './DateTimePicker';
import GenericSelect from './Select';
import Time from './Time';
import { Container, SearchIcon, Section } from './style';

const Navbar = () => {
  return (
    <Container>
      <Input
        height={40}
        fontWeight={500}
        fontSize={14}
        width={500}
        lh={20}
        br={8}
        placeholder={'Search'}
        iconLeft={<SearchIcon />}
      />
      <Section>
        <Time />
        <DateTime />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
