/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const GenericSelect = (props) => {
  const { data, width } = props;

  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0]?.value)
  );

  const handleChange = (event) => {
    setDefaultVal(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{ minWidth: 120, width: width || 150 }}
      size="small"
    >
      <Select
        sx={{ color: '#929FAF ', borderColor: '#929FAF', fontSize: '14px' }}
        value={defaultVal || 'Select'}
        onChange={handleChange}
      >
        {data?.map((item) => {
          return (
            <MenuItem
              sx={{ fontSize: '14px', color: '#929FAF' }}
              key={item.value}
              value={item.value}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
