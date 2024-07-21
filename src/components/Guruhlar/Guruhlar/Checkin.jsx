/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Container, Icon } from './style';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { students } from '../../../mock/student';
import { useState } from 'react';

const Status = ({ value }) => {
  switch (value) {
    case 'keldi':
      return <Icon.Keldi />;
    case 'sababli':
      return <Icon.Sababli />;
    case 'sababsiz':
      return <Icon.Sababsiz />;
    case 'birinchi':
      return <Icon.Birinchi />;
    default:
      return value;
  }
};

const headCells = [
  { id: 'name', label: 'Talaba' },
  { id: 'phone', label: 'Telefon raqam' },
  {
    id: '22-07',
    label: '22-07',
    render: (props) => <Status value={props['22-07']} />,
    align: 'center',
  },
  {
    id: '23-07',
    label: '23-07',
    render: (props) => <Status value={props['23-07']} />,
    align: 'center',
  },
  {
    id: '24-07',
    label: '24-07',
    render: (props) => <Status value={props['24-07']} />,
    align: 'center',
  },
  {
    id: '25-07',
    label: '25-07',
    render: (props) => <Status value={props['25-07']} />,
    align: 'center',
  },
  {
    id: '26-07',
    label: '26-07',
    render: (props) => <Status value={props['26-07']} />,
    align: 'center',
  },
  {
    id: '27-07',
    label: '27-07',
    render: (props) => <Status value={props['27-07']} />,
    align: 'center',
  },
  {
    id: '28-07',
    label: '28-07',
    render: (props) => <Status value={props['28-07']} />,
    align: 'center',
  },
  {
    id: '29-07',
    label: '29-07',
    render: (props) => <Status value={props['29-07']} />,
    align: 'center',
  },
];
const Checkin = () => {
  const [rows] = useState(students);

  return (
    <Container>
      <BreadCrumb>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={['year', 'month']}
            slotProps={{ textField: { size: 'small' } }}
            sx={{ width: 185 }}
          />
        </LocalizationProvider>
      </BreadCrumb>
      <GenericTable
        headCells={headCells}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

export default Checkin;
