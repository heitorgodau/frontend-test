import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, className, type } = props;
  return (
    <button type={type} className={className}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: '',
  className: 'btn',
};

export default Button;
