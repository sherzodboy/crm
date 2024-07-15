import Input from '../Generics/Input';
import GenericSelect from '../Generics/Select';
import DateTime from './DateTimePicker';
import Time from './Time';
import { Container, SearchIcon, Section } from './style';

const Navbar = () => {
  const data = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' },
  ];

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
        <GenericSelect label="Language" data={data} />
      </Section>
    </Container>
  );
};

export default Navbar;
