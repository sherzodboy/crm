/* eslint-disable react/no-unescaped-entities */
import Modal from '../../Generics/Modal/index';
import Title from '../../Generics/Title';
import GenericInput from '../../Generics/Input/index';
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from '../../Generics/Select';
import { ModalRow, TextArea } from './style';

const AllLidsModal = (props) => {
  return (
    <Modal {...props}>
      <Title size={22} mb={20}>
        Talaba qo'shish
      </Title>
      {/* full name */}
      <ModalRow>
        <Subtitle size={13} mb={3} color="#929FAF">
          To'liq ismingiz
        </Subtitle>
        <GenericInput
          fontWeight={500}
          fontSize={16}
          pl={15}
          color={'black'}
          placeholder={'Search'}
        />
      </ModalRow>
      {/* Yo'nalish */}
      <ModalRow>
        <Subtitle size={13} mb={3} color="#929FAF">
          Yo'nalishni tanlang
        </Subtitle>
        <GenericSelect width={'100%'} />
      </ModalRow>
      {/* Daraja */}
      <ModalRow>
        <Subtitle size={13} mb={3} color="#929FAF">
          Darajangizni tanlang
        </Subtitle>
        <GenericSelect width={'100%'} />
      </ModalRow>
      {/* Kun */}
      <ModalRow>
        <Subtitle size={13} mb={3} color="#929FAF">
          Kunni tanlang
        </Subtitle>
        <GenericSelect width={'100%'} />
      </ModalRow>
      {/* Kelish sanasi */}
      <ModalRow>
        <Subtitle size={13} mb={3} color="#929FAF">
          Boshlash sanasini tanlang
        </Subtitle>
        <GenericSelect width={'100%'} />
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
