/* eslint-disable react/prop-types */
import Modal from '../../../Generics/Modal/index';
import Subtitle from '../../../Generics/Subtitle';
import Title from '../../../Generics/Title';
import GenericInput from '../../../Generics/Input/index';
/* eslint-disable react/no-unescaped-entities */

const TolovlarModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Daraja Qo'shish</Title>
      {/* Nome */}
      <Subtitle mt={16} mb={8} color={'#929FAF'}>
        Nomi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* Manzil*/}

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <Subtitle mt={16} mb={8} color={'#929FAF'}>
            Yarim Stavka
          </Subtitle>
          <GenericInput fontWeight={500} value={data?.name} />
        </div>
        <div style={{ flex: 1 }}>
          <Subtitle mt={16} mb={8} color={'#929FAF'}>
            Bir Stavka
          </Subtitle>
          <GenericInput fontWeight={500} value={data?.name} />
        </div>
      </div>
    </Modal>
  );
};

export default TolovlarModal;
