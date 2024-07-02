import { email } from '../../mock/email';
import Subtitle from '../Generics/Subtitle';
import { Info, Section, Wrapper } from './emailStyle';

const Email = () => {
  return (
    <Wrapper>
      {email.map((email) => {
        return (
          <Info key={email.id}>
            <Section>
              <Info.Img src={email.src} />
              <div>
                <Subtitle size={14}>{email.name}</Subtitle>
                <Subtitle size={12} color={'#929FAF'}>
                  {email.status}
                </Subtitle>
              </div>
            </Section>
            <Info.Sms>{email.sms}</Info.Sms>
            <Section end>{email.date}</Section>
          </Info>
        );
      })}
    </Wrapper>
  );
};

export default Email;
