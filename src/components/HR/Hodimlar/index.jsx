/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
// import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

const Hodimlar = () => {
  // const [open, setOpen] = useState(false);
  const [openModal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!openModal);
    setModalProps(res);
  };
  const onDelete = (e) => {
    e.stopPropagation();
  };

  const headCells = [
    { id: 'name', label: "To'liq ismi" },
    { id: 'birthday', label: "Tug'ilgan sanasi" },
    { id: 'jinsi', label: 'Jinsi' },
    { id: 'role', label: 'Vazifasi' },
    { id: 'tel', label: 'Telefon raqami' },
    { id: 'filial', label: 'Filial' },
    {
      id: 'action',
      label: '',
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={onDelete} />
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      name: 'Avliyokulov Ravshan',
      birthday: '01.02.2004',
      jinsi: 'erkak',
      role: 'Moderator',
      tel: '+998 91 123-45-67',
      filial: 'A.Navoiy st.',
    },
    {
      id: 2,
      name: 'Tohtayev Asliddin',
      birthday: '11.03.2003',
      jinsi: 'erkak',
      role: 'Moderator',
      tel: '+998 91 123-45-67',
      filial: 'Ibn Sino st.',
    },
    {
      id: 3,
      name: 'Qarshiev Suyun',
      birthday: '11.20.2002',
      jinsi: 'erkak',
      role: 'Moderator',
      tel: '+998 91 123-45-67',
      filial: 'Amir Temur st.',
    },
  ];

  const onToggleModal = () => {
    setModal(!openModal);
    setModalProps(null);
  };

  const onSave = () => {};

  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={openModal}
        onSave={onSave}
        onClose={onToggleModal}
      />
      <BreadCrumb>
        <GenericButton
          style={{ backgroundColor: '#EB2F96' }}
          type="add"
          onClick={onToggleModal}
        >
          Hodim qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

export default Hodimlar;
