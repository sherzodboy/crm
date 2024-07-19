/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

const AllStudents = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!openModal);
    setModalProps(res);
  };
  const onMove = (e) => {
    e.stopPropagation();
  };
  const onDelete = (e) => {
    e.stopPropagation();
  };

  const headCells = [
    { id: 'name', label: "O'quvchining ismi" },
    { id: 'phone', label: 'Telefon raqam' },
    {
      id: 'completed',
      label: 'Status',
      render: (res) => (
        <span
          style={{ color: !res?.completed ? 'red' : 'green', fontWeight: 600 }}
        >
          {res?.completed ? 'tugallangan' : 'tugallanmagan'}
        </span>
      ),
    },
    {
      id: 'balance',
      label: 'Balans',
      render: (res) => {
        let active = res?.balance?.includes('-');
        return (
          <span
            style={{
              backgroundColor: active ? 'red' : 'green',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '8px',
            }}
          >
            {res?.balance}
          </span>
        );
      },
    },
    { id: 'parent', label: 'Ota Onasi' },
    { id: 'group', label: 'Guruh' },
    // { id: 'date', label: 'Dars kuni va vaqti' },
    // { id: 'addedDate', label: "Qo'shilgan sana" },
    // { id: 'admin', label: 'Moderator' },
    {
      id: 'action',
      label: '',
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={onMove} />
          <Action.Delete onClick={onDelete} />
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      name: 'Ravshan',
      group: 'Frontend',
      date: '08:00',
      days: 'toq kunlari',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
      level: 'Senior',
      phone: '+998 77 272-33-22',
      balance: '-300,000',
      parent: 'Ilon Mask',
      completed: true,
    },
    {
      id: 2,
      name: 'Asliddin',
      group: 'Frontend',
      days: 'toq kunlari',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
      level: 'Middle',
      phone: '+998 77 272-33-22',
      balance: '-600,000',
      parent: 'Ilon Mask',
      completed: true,
    },
    {
      id: 3,
      name: 'Alibek',
      group: 'Frontend',
      date: '08:00',
      days: 'toq kunlari',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
      level: 'Beginner',
      phone: '+998 77 272-33-22',
      balance: '600,000',
      parent: 'Ilon Mask',
      completed: false,
    },
    {
      id: 4,
      name: 'Iroda',
      group: 'Frontend',
      date: '08:00',
      days: 'toq kunlari',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
      level: 'Junior',
      phone: '+998 77 272-33-22',
      balance: '600,000',
      parent: 'Ilon Mask',
      completed: false,
    },
    {
      id: 5,
      name: 'Baharoy',
      group: 'Frontend',
      date: '08:00',
      days: 'toq kunlari',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
      level: 'Advanced',
      phone: '+998 77 272-33-22',
      balance: '-600,000',
      parent: 'Ilon Mask',
      completed: true,
    },
    {
      id: 6,
      name: 'Marjona',
      group: 'Frontend',
      date: '08:00',
      days: 'toq kunlari',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
      level: 'Junior',
      phone: '+998 77 272-33-22',
      balance: '-100,000',
      parent: 'Ilon Mask',
      completed: false,
    },
  ];

  const data1 = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' },
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
        <GenericButton type="import">Import</GenericButton>
        <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type="add" onClick={onToggleModal}>
          Buyurtma qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};

export default AllStudents;