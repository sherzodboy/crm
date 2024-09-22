/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from 'react';
import BreadCrumb from '../../Generics/BreadCrumb';
import GenericTable from '../../Generics/Table';
import { Action, Container } from './style';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';
import { StudentsContext } from '../../../context/students';
import useFetch from '../../../hooks/useFetch';

const AllLids = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [state, dispatch] = useContext(StudentsContext);
  const [spinner, setSpinner] = useState(false);

  const request = useFetch();

  const getStudent = async () => {
    setSpinner(true);
    let res = await request('/tabs/students');
    dispatch({ type: 'get', payload: res });
    setSpinner(false);
  };

  // fetch
  useEffect(() => {
    getStudent();
  }, []);

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!openModal);
    setModalProps(res);
  };

  const onMove = (e, value) => {
    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/students/id/*${value?.id}*`, { method: 'DELETE' }).then(
      (rs) => {
        console.log(rs, 'rs');
        getStudent();
      }
    );
  };
  const headCells = [
    { id: 'name', label: "O'quvchining ismi" },
    { id: 'field', label: 'Guruh' },
    { id: 'days', label: 'Dars kuni va vaqti' },
    { id: 'added_date', label: "Qo'shilgan sana" },
    { id: 'admin', label: 'Moderator' },
    {
      id: 'action',
      label: '',
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={(e) => onMove(e, res)} />
        </Action>
      ),
    },
  ];

  const data1 = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' },
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
        <GenericButton type="import">Import</GenericButton>
        <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type="add" onClick={onToggleModal}>
          Buyurtma qo'shish
        </GenericButton>
      </BreadCrumb>
      <GenericTable
        open={open}
        headCells={headCells}
        rows={state}
        spinner={spinner}
      >
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};

export default AllLids;
