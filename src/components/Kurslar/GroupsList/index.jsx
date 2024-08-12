/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
import { rows } from '../../../mock/groups';
import CollapsibleTable from './Table';
import GroupModal from './GroupModalKurs';

const GroupsList = () => {
  // const [open, setOpen] = useState(false);
  const [openModal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onMove = (e, res) => {
    e.stopPropagation();
    setModal(!openModal);
    setModalProps(res);
  };
  const onDelete = (e) => {
    e.stopPropagation();
  };

  const headCells = [
    { id: 'title', label: 'Kurslar turi' },
    {
      id: 'action',
      label: '',
      render: (res) => (
        <Action>
          <Action.Move onClick={(e) => onMove(e, res)} />
          <Action.Delete onClick={onDelete} />
        </Action>
      ),
    },
  ];

  const onToggleModal = () => {
    setModal(!openModal);
    setModalProps(null);
  };

  const onSave = () => {};

  return (
    <Container>
      <GroupModal
        data={modalProps}
        open={openModal}
        onSave={onSave}
        onClose={onToggleModal}
      />
      <BreadCrumb>
        <GenericButton
          style={{ backgroundColor: '#13C2C2' }}
          type="add"
          onClick={() => onToggleModal(!open)}
        >
          Guruh Qo'shish
        </GenericButton>
      </BreadCrumb>
      <CollapsibleTable rows={rows} cells={headCells} />
    </Container>
  );
};

export default GroupsList;
