import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from './style';
import sidebar from '../utils/sidebar';
import Sidebar from '../components/Sidebar';
import Checkin from '../components/Guruhlar/Guruhlar/Checkin';

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path={'/guruhlar/guruhlar/checkin'} element={<Checkin />} />;
          {sidebar.map((parent) => {
            const ElementParent = parent.element;
            if (parent?.children?.length) {
              return parent.children.map((child) => {
                const ElementChild = child.element;
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ElementChild />}
                  />
                );
              });
            } else
              return (
                !parent.hidden && (
                  <Route
                    key={parent.id}
                    path={parent.path}
                    element={<ElementParent />}
                  />
                )
              );
          })}
        </Route>

        {sidebar.map((parent) => {
          const ElementParent = parent.element;
          return (
            parent.hidden && (
              <Route
                key={parent.id}
                path={parent.path}
                element={<ElementParent />}
              />
            )
          );
        })}

        <Route path="/login" element={<div>login</div>} />
        <Route path="/" element={<Navigate to={'/analitika'} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Container>
  );
};

export default Root;
