import React from 'react';
import PropTypes from 'prop-types';

const BurgerBtn = (props) => {
  const { open, onClick } = props;
  if (open) return <span className="burger-btn open" onClick={onClick} />;
  return <span className="burger-btn" onClick={onClick} />;
};

BurgerBtn.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

BurgerBtn.defaultProps = {
  open: false,
};

export default BurgerBtn;
