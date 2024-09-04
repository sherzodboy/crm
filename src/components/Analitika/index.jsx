import { useContext } from 'react';
import Title from '../Generics/Title';
import Subtitle from '../Generics/Subtitle';
import { mediaData, privateData } from '../../utils/analitics';
import Email from './Email';
import Moliya from './Moliya';
import {
  Container,
  Wrapper,
  Card,
  Section,
  Plus,
  Counter,
  Arrow,
  SubCard,
  FooterWrapper,
} from './style';
import { MentorContext } from '../../context/mentor';

const Analitika = () => {
  const [state] = useContext(MentorContext);
  console.log(state, 'state');

  return (
    <Container>
      <Title mb={16}> Analitika</Title>
      {/* PrivateData */}
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
      {/* MediaData */}
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
      <FooterWrapper>
        <FooterWrapper.Email>
          <Subtitle mt={24} mb={16} count={12}>
            Email habarlari
          </Subtitle>
          <Email></Email>
        </FooterWrapper.Email>
        <FooterWrapper.Moliya>
          <Subtitle mt={24} mb={16}>
            Moliya
          </Subtitle>
          <Moliya></Moliya>
        </FooterWrapper.Moliya>
      </FooterWrapper>
    </Container>
  );
};

export default Analitika;
