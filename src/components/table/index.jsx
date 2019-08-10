import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { children } = props;

  return <table>{children}</table>;
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
