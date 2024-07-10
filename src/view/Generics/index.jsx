import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/Generics/BreadCrumb';

const Generics = () => {
  const location = useLocation();
  return (
    <div>
      <BreadCrumb />
      <div>{location.pathname} page</div>
      <div>Coming soon...</div>
    </div>
  );
};

export default Generics;
