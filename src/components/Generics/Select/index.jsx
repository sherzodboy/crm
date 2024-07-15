/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const GenericSelect = (props) => {
  const { data } = props;

  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0]?.value)
  );

  const handleChange = (event) => {
    setDefaultVal(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{ m: 1, minWidth: 120, width: 150 }}
      size="small"
    >
      <Select
        sx={{ color: '#929FAF', borderColor: '#929FAF' }}
        value={defaultVal || 'Select'}
        onChange={handleChange}
        style={{ width: '150px', height: '40px' }}
      >
        {data?.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
