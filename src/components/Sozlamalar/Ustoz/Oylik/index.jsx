/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Container } from './style';
import { useState } from 'react';
import GenericTable from '../../../Generics/Table/index';
import BreadCrumb from '../../BreadCrumb';
import GenericButton from '../../../Generics/Button/index';
import DarajalarModal from './modal';

const Oylik = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onSave = () => {
    setOpen(false);
  };

  const rows = [
    {
      id: 1,
      title: 'Manager',
      foiz: '10 %',
    },
    {
      id: 2,
      title: 'Ustoz',
      foiz: '20 %',
    },
    {
      id: 3,
      title: 'Adminstration',
      foiz: '5 %',
    },
  ];
  const cells = [
    { id: 'title', label: "Qo'shimcha Foiz Turi" },
    {
      id: 'foiz',
      label: 'Foiz miqdori',
      align: 'right',
    },
  ];

  return (
    <Container>
      <DarajalarModal open={open} onClose={onClose} onSave={onSave} />
      <BreadCrumb>
        <GenericButton
          style={{ backgroundColor: '#FA8C16' }}
          onClick={() => setOpen(true)}
          type="add"
        >
          Daraja qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable checkbox={false} headCells={cells} rows={rows} />
    </Container>
  );
};

export default Oylik;
