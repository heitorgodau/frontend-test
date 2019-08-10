import React from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {
  const { head, children } = props;

  if (head) return <th>{children}</th>;

  return <td>{children}</td>;
};

TableCell.propTypes = {
  head: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TableCell.defaultProps = {
  head: false,
};

export default TableCell;
