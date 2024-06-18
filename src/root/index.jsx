import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from './style';
import sidebar from '../utils/sidebar';

const Root = () => {
  return (
    <Container>
      <Routes>
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
              <Route
                key={parent.id}
                path={parent.path}
                element={<ElementParent />}
              />
            );
        })}
        <Route path="/" element={<Navigate to={'/analitika'} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Container>
  );
};

export default Root;
