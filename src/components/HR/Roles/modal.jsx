/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Modal from '../../Generics/Modal/index';
import Title from '../../Generics/Title';
import GenericInput from '../../Generics/Input/index';
import Subtitle from '../../Generics/Subtitle';
import { ModalRow, Wrapper } from './style';
import { roles } from '../../../mock/roles';
import { Checkbox } from '@mui/material';

const AllLidsModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size={22} mb={20}>
        Talaba qo'shish
      </Title>
      <ModalRow>
        {/*  Daraja */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Daraja
        </Subtitle>
        <GenericInput fontWeight={500} pl={15} value={data?.name} />
      </ModalRow>
      <ModalRow>
        {/* Izohi */}
        <Subtitle size={13} mb={3} color="#929FAF">
          Daraja Izohi
        </Subtitle>
        <GenericInput fontWeight={500} pl={15} value={data?.name} />
      </ModalRow>
      <Wrapper>
        {roles.map(([title, role]) => {
          return (
            <Wrapper.Left key={title}>
              <Wrapper.Title>{title}</Wrapper.Title>
              <div>
                {role.map(({ status, title }) => {
                  return (
                    <div key={title}>
                      <Checkbox defaultChecked={status} /> {title}
                    </div>
                  );
                })}
              </div>
            </Wrapper.Left>
          );
        })}
      </Wrapper>
    </Modal>
  );
};

export default AllLidsModal;
