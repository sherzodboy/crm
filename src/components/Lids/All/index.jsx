import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Container } from './style';

const AllLids = () => {
  const headCells = [
    { id: 'name', label: "O'quvchining ismi" },
    { id: 'group', label: 'Guruh' },
    { id: 'date', label: 'Dars kuni va vaqti' },
    { id: 'added Date', label: "Qo'shilgan sana" },
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
    {
      id: 5,
      name: 'Baharoy',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 6,
      name: 'Mohida',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 7,
      name: 'Suyun',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 8,
      name: 'Marjona',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 9,
      name: 'Bahriddin',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
    {
      id: 10,
      name: 'Azamad',
      group: 'Frontend',
      date: '08:00',
      addedDate: '10.07.2024',
      admin: 'Billion Admin',
    },
  ];
  return (
    <Container>
      <BreadCrumb />
      <GenericTable headCells={headCells} rows={rows} />
    </Container>
  );
};

export default AllLids;
