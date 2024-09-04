export const initialState = {
  name: 'Billion',
  length: 123,
};

// CRUD - GET, PUT, DELETE, POST
export const reducer = (state, action) => {
  const type = action?.type?.toLowerCase() || '';

  switch (type) {
    case 'get':
      return state;
    case 'delete':
      return {};
  }
};
