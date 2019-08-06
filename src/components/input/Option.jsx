import React from 'react';

const Option = (props) => {
  const { value, children } = props;
  return (
    <option value={value}>{children}</option>
  );
};

export default Option;
