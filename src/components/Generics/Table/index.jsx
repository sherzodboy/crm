/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount, headCells } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            sx={{ color: '#BBC3CD' }}
            // color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': '  all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ color: '#253E5F80', fontSize: '16px', cursor: 'pointer' }}
            key={headCell.id}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const GenericTable = (props) => {
  const [selected, setSelected] = useState([]);
  const { headCells, rows, open } = props;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer
        sx={{
          fontFamily: 'Montserrat',
          marginTop: '24px',
          height: open ? '64px' : '0px',
          overflow: 'hidden',
          transition: '0.25s all linear',
        }}
      >
        <Table>
          <TableBody>
            <TableRow
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                columnGap: '30px',
              }}
            >
              {props?.children}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 550 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        sx={{ color: '#BBC3CD' }}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>

                    {headCells.map((val) => (
                      <TableCell
                        align="left"
                        key={val.id}
                        sx={{
                          color: '#253E5F',
                          fontSize: '16px',
                          fontFamily: 'Montserrat',
                        }}
                      >
                        {val.render ? val.render : row[val.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
              {rows?.length < 1 && (
                <TableRow>
                  <TableCell align="center" colSpan={6}>
                    No Data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default GenericTable;
