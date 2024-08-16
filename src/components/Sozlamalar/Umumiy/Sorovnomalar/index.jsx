/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Container, Status } from './style';
import { useState } from 'react';
import GenericTable from '../../../Generics/Table/index';

const Sorovnomalar = () => {
  const [open] = useState(false);

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

  return (
    <Container>
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </Container>
  );
};

export default Sorovnomalar;
