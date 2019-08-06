import React from 'react';

const TableCell = (props) => {
  const { head, children } = props;

  if (head) return <th>{children}</th>;

  return <td>{children}</td>;
};

export default TableCell;
