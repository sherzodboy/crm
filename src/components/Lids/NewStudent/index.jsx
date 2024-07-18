/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

const NewStudent = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onMove = (e, res) => {
    e.stopPropagation();
    setModal(!openModal);
    setModalProps(res);
  };

  const headCells = [
    { id: 'name', label: "O'quvchining ismi" },
    { id: 'group', label: 'Guruh' },
    { id: 'phone', label: 'Telefon raqam' },
    { id: 'date', label: 'Dars kuni va vaqti' },
    { id: 'addedDate', label: "Qo'shilgan sana" },
    { id: 'admin', label: 'Moderator' },
    {
      id: 'action',
      label: '',
      render: (res) => (
        <Action>
          <Action.Move onClick={(e) => onMove(e, res)} />
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
      phone: '+998 91 584-27-22',
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
      phone: '+998 91 584-27-22',
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
      phone: '+998 91 584-27-22',
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
      phone: '+998 91 584-27-22',
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
      phone: '+998 91 584-27-22',
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
      phone: '+998 91 584-27-22',
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
        {/* import */}
        <GenericButton type="import" onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type="add" onClick={onToggleModal}>
          Buyurtma qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={['year', 'month', 'day']}
            slotProps={{ textField: { size: 'small' } }}
          />
        </LocalizationProvider>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};

export default NewStudent;
