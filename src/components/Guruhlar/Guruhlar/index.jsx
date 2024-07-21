/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
// import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import moment from 'moment';

const Guruhlar = () => {
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
    { id: 'group', label: 'Guruh' },
    { id: 'kurs', label: 'Kurs' },
    { id: 'level', label: 'Level' },
    { id: 'start', label: 'Boshlanish' },
    { id: 'end', label: 'Tugash' },
    { id: 'turi', label: 'Turi' },
    {
      id: 'completed',
      label: 'Status',
      render: (res) => <span>{res?.completed ? 'Completed' : 'Active'}</span>,
    },
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

  let rows = [
    {
      id: 1,
      group: 'Frontend',
      start: '08:00',
      end: '10:00',
      level: 'Senior',
      turi: 'Offline',
      kurs: 'Javascript',
    },
    {
      id: 2,
      group: 'Frontend',
      start: '08:00',
      end: '10:00',
      level: 'Middle',
      turi: 'Offline',
      kurs: 'Javascript',
    },
    {
      id: 3,
      group: 'Frontend',
      start: '08:00',
      end: '10:00',
      level: 'Beginner',
      turi: 'Online',
      kurs: 'Javascript',
    },
  ];

  // const data1 = [
  //   { value: 'uzbek', title: 'Uzbek' },
  //   { value: 'russian', title: 'Russian' },
  //   { value: 'english', title: 'English' },
  // ];

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
        <GenericButton type="add" onClick={() => onToggleModal(!open)}>
          Guruh Qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable
        // open={open}
        url="/guruhlar/guruhlar/checkin"
        headCells={headCells}
        rows={rows}
        checkbox={false}
      >
        {/* <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={['year', 'month', 'day']}
            slotProps={{ textField: { size: 'small' } }}
          />
        </LocalizationProvider>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} /> */}
      </GenericTable>
    </Container>
  );
};

export default Guruhlar;
