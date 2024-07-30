/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
// import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

const Roles = () => {
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
    { id: 'daraja', label: 'Daraja' },
    { id: 'izoh', label: 'Daraja izohi' },
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
      daraja: 'Moderator',
      izoh: 'Adminga tegishli malumotlar',
    },
    {
      id: 2,
      daraja: 'Director',
      izoh: 'Bazadagi barcha malumotlarni korish huquqi',
    },
    {
      id: 3,
      daraja: 'Manager',
      izoh: 'Barcha malumotlar, Director PM dan tashqari',
    },
    {
      id: 4,
      daraja: "O'qituvchi",
      izoh: 'Ustozning darslari',
    },
  ];

  // const data1 = [
  //   { value: 'uzbek', title: 'Uzbek' },
  //   { value: 'russian', title: 'Russian' },
  //   { value: 'english', title: 'English' },
  // ];

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
        {/* <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton> */}
        <GenericButton type="add" onClick={onToggleModal}>
          Xona qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
      >
        {/* <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} /> */}
      </GenericTable>
    </Container>
  );
};

export default Roles;
