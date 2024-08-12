/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Modal from '../../Generics/Modal/index';
import Title from '../../Generics/Title';
import GenericInput from '../../Generics/Input/index';
import Subtitle from '../../Generics/Subtitle';
import { Devider, Input, Section } from './style';
import { Checkbox } from '@mui/material';

const GroupModal = (props) => {
  const { data } = props;
  // const selectData = data && [
  //   { value: 'Frontend', title: 'Frontend' },
  //   { value: 'Backend', title: 'Backend' },
  // ];

  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={'#929FAF'}>
        Yo'nalish turi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />

      {/* Filial */}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox /> A.Navoiy
          </Section>
          <Section>
            <Checkbox /> Beruniy
          </Section>
          <Section>
            <Checkbox /> Ibn Sino
          </Section>
          <Section>
            <Checkbox /> Amir Temur
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
          <Input />
          <Input />
          <Input />
          <Input />
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default GroupModal;
