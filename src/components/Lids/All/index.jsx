import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Container } from './style';

const AllLids = () => {
  const [open, setOpen] = useState(false);

  const headCells = [
    { id: 'name', label: "O'quvchining ismi" },
    { id: 'group', label: 'Guruh' },
    { id: 'date', label: 'Dars kuni va vaqti' },
    { id: 'addedDate', label: "Qo'shilgan sana" },
    { id: 'admin', label: 'Moderator' },
  ];

  let rows = [
    {
      id: 1,
      name: 'Ravshan',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 2,
      name: 'Asliddin',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 3,
      name: 'Alibek',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 4,
      name: 'Iroda',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
  ];
  return (
    <Container>
      <BreadCrumb>
        <button onClick={() => setOpen(!open)}>Filter</button>
        <button onClick={() => setOpen(!open)}>Import</button>
        <button onClick={() => setOpen(!open)}>{"Buyurtma qo'shish"}</button>
      </BreadCrumb>
      <GenericTable open={open} headCells={headCells} rows={rows} />
    </Container>
  );
};

export default AllLids;
