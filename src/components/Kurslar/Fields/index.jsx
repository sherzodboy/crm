/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
// import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

const Fields = () => {
  // const [open, setOpen] = useState(false);
  const [openModal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!openModal);
    setModalProps(res);
  };
  const onDelete = (e) => {
    e.stopPropagation();
  };

  const headCells = [
    { id: 'rooms', label: 'Xona' },
    { id: 'capacity', label: "O'rinlar soni" },
    {
      id: 'freetime',
      label: "Bo'sh vaqti",
      render: ({ freetime }) => {
        return (
          <span>
            {freetime.map((val) => (
              <span
                style={{
                  margin: '5px',
                  padding: '6px',
                  backgroundColor: 'whitesmoke',
                  borderRadius: '4px',
                }}
                key={val}
              >
                {val}
              </span>
            ))}
          </span>
        );
      },
    },
    { id: 'wifi', label: 'WI-FI' },
    { id: 'monitor', label: 'Monitor' },
    { id: 'blackboard', label: 'Blackboard' },
    { id: 'status', label: 'Status' },
    {
      id: 'action',
      label: '',
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={onDelete} />
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      rooms: 'Frontend Team',
      capacity: 20,
      freetime: ['11:00 ~ 13:00', '21:00'],
      wifi: 'bor',
      monitor: 'bor',
      blackboard: 'yoq',
      status: 'Ishlayabdi',
    },
    {
      id: 2,
      rooms: 'Backend Team',
      capacity: 15,
      freetime: ['13:00 ~ 14:00', '21:00'],
      wifi: 'yoq',
      monitor: 'yoq',
      blackboard: 'bor',
      status: 'Remontda',
    },
    {
      id: 3,
      rooms: 'Mobile Team',
      capacity: 10,
      freetime: ['17:00 ~ 18:00', '21:00'],
      wifi: 'bor',
      monitor: 'bor',
      blackboard: 'bor',
      status: 'Ishlayabdi',
    },
  ];

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
        <GenericButton
          style={{ backgroundColor: '#13C2C2' }}
          type="add"
          onClick={onToggleModal}
        >
          Xona qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

export default Fields;
