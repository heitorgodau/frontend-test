import React from 'react';
import PropTypes from 'prop-types';
import MenuList from './MenuList';
import BurgerBtn from './BurgerBtn';

const BurgerMenu = (props) => {
  const { onClick } = props;
  return (
    <div className="burger-menu">
      <BurgerBtn open onClick={onClick} />
      <MenuList links={['Dashboard', 'Resumo', 'Configurações']} className="menu-list" />
    </div>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BurgerMenu;
