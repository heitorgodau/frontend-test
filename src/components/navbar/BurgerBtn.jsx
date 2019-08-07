import React from 'react';

const BurgerBtn = (props) => {
  const { open, onClick } = props;
  if (open) return <span className="burger-btn open" onClick={onClick} />;
  return <span className="burger-btn" onClick={onClick} />;
};

export default BurgerBtn;
