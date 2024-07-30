/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Modal from '../../Generics/Modal/index';
import Title from '../../Generics/Title';
import GenericInput from '../../Generics/Input/index';
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from '../../Generics/Select';
import { Devider, ModalRow, Section } from './style';
import { Checkbox } from '@mui/material';

const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: 'Frontend', title: 'Frontend' },
    { value: 'Backend', title: 'Backend' },
  ];

  return (
    <Modal {...props}>
      <Title size={22} mb={20}>
        Talaba qo'shish
      </Title>
      <ModalRow>
        {/* full name */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Studentning ismi
        </Subtitle>
        <GenericInput fontWeight={500} pl={15} value={data?.name} />
      </ModalRow>
      <ModalRow>
        {/* tel raqam */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Telefon raqami
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.group} />
      </ModalRow>
      <ModalRow>
        {/* jinsi */}
        <Subtitle mt={16} Subtitlemb={8} color={'#929FAF'}>
          Jinsi
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.level} />
      </ModalRow>
      <ModalRow>
        {/* ustoz */}
        <Subtitle mt={16} mb={8} color={'#929FAF'}>
          O'qtuvchi tanlang
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.group} />
      </ModalRow>
      <ModalRow>
        {/* foiz */}
        <Subtitle mt={16} mb={8} color={'#929FAF'}>
          Foizni tanlang
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.days} />
      </ModalRow>
      {/* Role & HR */}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox /> A.Navoiy st.
          </Section>
          <Section>
            <Checkbox /> Ibn Sino st.
          </Section>
          <Section>
            <Checkbox /> Amir Temur st.
          </Section>
          <Section>
            <Checkbox /> Beruniy st.
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
          <GenericSelect
            mt={12}
            data={selectData}
            width={'100%'}
            value={'Moderator'}
            defaultValue={'Moderator'}
          />
          <GenericSelect
            mt={12}
            data={selectData}
            width={'100%'}
            value={data?.group}
          />
          <GenericSelect
            mt={12}
            data={selectData}
            width={'100%'}
            value={data?.group}
          />
          <GenericSelect
            mt={12}
            data={selectData}
            width={'100%'}
            value={data?.group}
          />
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default AllLidsModal;
