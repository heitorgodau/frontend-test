import React from 'react';
import BurgerBtn from './BurgerBtn';

const BurgerMenu = (props) => {
  const { onClick } = props;
  return (
    <div className="burger-menu">
      <BurgerBtn open onClick={onClick} />
      <ul className="menu-list">
        <li>Resumo</li>
        <li>Dashboard</li>
        <li className="active">Configurações</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
