/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Container, Status } from './style';
import { useState } from 'react';
import GenericTable from '../../../Generics/Table/index';
import BreadCrumb from '../../BreadCrumb';
import GenericButton from '../../../Generics/Button/index';
import SorovnomaModal from './modal';

const Sorovnomalar = () => {
  const [open, setOpen] = useState(false);

  const rows = [
    {
      id: 1,
      sorovnoma: 'Instagram',
      all: 230,
      accepted: 200,
    },
    {
      id: 2,
      sorovnoma: 'Telegram',
      accepted: 150,
      all: 230,
    },
    {
      id: 3,
      sorovnoma: 'YouTube',
      all: 230,
      accepted: 90,
    },
  ];
  const cells = [
    {
      id: 'sorovnoma',
      label: "So'rovnoma turi",
      render: (props) => <Status>{props?.sorovnoma}</Status>,
    },
    {
      id: 'all',
      label: 'Barhca Lidlar',
      render: (props) => <Status>{props?.all}</Status>,
    },
    {
      id: 'accepted',
      label: 'Konversiya',
      render: (props) => <Status>{props.accepted}</Status>,
    },
    {
      id: 'foiz',
      label: 'Foiz',
      render: (props) => (
        <Status>{parseInt((props.accepted / props.all) * 100)} %</Status>
      ),
    },
  ];

  const onSave = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <SorovnomaModal open={open} onSave={onSave} onClose={onClose} />
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

export default Sorovnomalar;
