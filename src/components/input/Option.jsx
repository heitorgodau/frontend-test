import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { value, children } = props;
  return (
    <option value={value}>{children}</option>
  );
};

Option.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Option;
