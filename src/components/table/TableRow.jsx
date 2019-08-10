import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

const TableRow = (props) => {
  const { val, head } = props;
  return (
    <tr>
      {
        val.map((el, idx) => <TableCell head={head} key={idx}>{el}</TableCell>)
      }
    </tr>
  );
};

TableRow.propTypes = {
  val: PropTypes.arrayOf(PropTypes.string).isRequired,
  head: PropTypes.bool,
};

TableRow.defaultProps = {
  head: false,
};

export default TableRow;
