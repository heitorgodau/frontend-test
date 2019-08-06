import React from 'react';
import TableCell from './TableCell';

const TableRow = (props) => {
  const { val, head } = props;
  const valSplited = val.split(';');
  return (
    <tr>
      {
        valSplited.map((el, idx) => <TableCell head key={idx}>{el}</TableCell>)
      }
    </tr>
  );
};

export default TableRow;
