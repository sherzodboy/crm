/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Container } from './style';
import { useState } from 'react';
import GenericTable from '../../../Generics/Table/index';
import BreadCrumb from '../../BreadCrumb';
import GenericButton from '../../../Generics/Button/index';
import FiliallarModal from './modal';

const Filiallar = () => {
  const [open, setOpen] = useState(false);

  const onSave = () => {
    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const rows = [
    {
      id: 1,
      location: 'kichik daha 5, Termez, Surxondaryo Region, Uzbekistan',
      filial: 'Termiz, Nigoh',
      href: 'https://maps.app.goo.gl/WQ8z7aB4i7unGz8R9',
    },
    {
      id: 2,
      location: 'Termez, Surxondaryo Region, Uzbekistan',
      filial: 'Grand Almaz',
      href: 'https://maps.app.goo.gl/ciGk12LmRKnm4i746',
    },
  ];
  const cells = [
    { id: 'filial', label: 'Filiallar' },
    {
      id: 'location',
      label: 'Manzil',
      align: 'right',
      render: (props) => {
        return (
          <a href={props?.href} target="_blank">
            {props?.location}
          </a>
        );
      },
    },
  ];

  return (
    <Container>
      <FiliallarModal open={open} onSave={onSave} onClose={onClose} />
      <BreadCrumb>
        <GenericButton
          onClick={() => setOpen(true)}
          style={{ backgroundColor: '#FA8C16' }}
          type="add"
        >
          Filial qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </Container>
  );
};

export default Filiallar;
