/* eslint-disable react/no-unescaped-entities */
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Container } from './style';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { students } from '../../../mock/student';
import { useState } from 'react';

const Checkin = () => {
  const [rows] = useState(students);

  const headCells = [
    { id: 'name', label: 'Talaba' },
    { id: 'phone', label: 'Telefon raqam' },
  ];

  return (
    <Container>
      <BreadCrumb>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={['year', 'month']}
            slotProps={{ textField: { size: 'small' } }}
            sx={{ width: '150px' }}
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
