import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Container } from './style';
import GenericButton from '../../Generics/Button';

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
        <GenericButton type="import" onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type="add" onClick={() => setOpen(!open)}>
          {"Buyurtma qo'shish"}
        </GenericButton>
      </BreadCrumb>
      <GenericTable open={open} headCells={headCells} rows={rows} />
    </Container>
  );
};

export default AllLids;
