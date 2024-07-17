/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Modal from '../../Generics/Modal/index';
import Title from '../../Generics/Title';
import GenericInput from '../../Generics/Input/index';
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from '../../Generics/Select';
import { ModalRow, TextArea } from './style';

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
          To'liq ismingiz
        </Subtitle>
        <GenericInput
          fontWeight={500}
          fontSize={16}
          pl={15}
          color={'black'}
          placeholder={'Search'}
          value={data?.name}
        />
      </ModalRow>
      <ModalRow>
        {/* Yo'nalish */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Yo'nalishni tanlang
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.group} />
      </ModalRow>
      <ModalRow>
        {/* Daraja */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Darajangizni tanlang
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.level} />
      </ModalRow>
      <ModalRow>
        {/* Kun */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Kunni tanlang
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.days} />
      </ModalRow>
      <ModalRow>
        {/* Kelish sanasi */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Boshlash sanasini tanlang
        </Subtitle>
        <GenericSelect data={selectData} width={'100%'} value={data?.date} />
      </ModalRow>
      {/* Izoh */}
      <ModalRow>
        <Subtitle size={13} mb={3} color="#929FAF">
          Izoh
        </Subtitle>
        <TextArea placeholder={'Izong qoldiring...'} />
      </ModalRow>
    </Modal>
  );
};

export default AllLidsModal;
