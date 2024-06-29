import Title from '../Generics/Title';
import Subtitle from '../Generics/Subtitle';
import {
  Container,
  Wrapper,
  Card,
  Section,
  Plus,
  Counter,
  Arrow,
  SubCard,
} from './style';
import { mediaData, privateData } from '../../utils/analitics';

const Analitika = () => {
  return (
    <Container>
      <Title mb={16}> Analitika</Title>
      <Wrapper gap={24}>
        {privateData.map((value) => {
          const { icon: Icon } = value;
          const { img: Img } = value;
          return (
            <Card gap={24} key={value.id} title={value.title}>
              {/* top */}
              <Section title={value.title}>
                <Title>
                  <Icon className="icon" /> {value.title}
                </Title>
                <Plus title={value.title} />
              </Section>
              {/* bottom */}
              <Section title={value.title}>
                <Title>
                  <Arrow /> <Counter>{value.count}</Counter>
                </Title>
                <Img />
              </Section>
            </Card>
          );
        })}
      </Wrapper>
      <Subtitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </Subtitle>
      <Wrapper>
        {mediaData.map((value) => {
          const { icon: Icon } = value;
          return (
            <SubCard gap={24} key={value.id} title={value.title}>
              {/* top */}
              <Section title={value.title}>
                <Subtitle>
                  <Icon className="subicon" /> {value.title}
                </Subtitle>
                <Plus title={value.title} />
              </Section>
              {/* bottom */}
              <Section title={value.title}>
                <Title color={'#52C41A'}>
                  <Arrow /> 22%
                </Title>
                <Counter>{value.count}k</Counter>
              </Section>
            </SubCard>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Analitika;
