import React from 'react';
import PropTypes from 'prop-types';

const TableWrap = (props) => {
  const { children, head } = props;

  if (head) return <thead>{children}</thead>;

  return <tbody>{children}</tbody>;
};

TableWrap.propTypes = {
  children: PropTypes.node,
  head: PropTypes.bool,
};

TableWrap.defaultProps = {
  children: null,
  head: false,
};

export default TableWrap;
