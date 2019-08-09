import React from 'react';
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

export default BurgerMenu;
