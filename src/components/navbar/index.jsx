import React, { Component } from 'react';
import Image from '../imageTag';
import BurgerBtn from './BurgerBtn';
import BurgerMenu from './BurgerMenu';
import MenuList from './MenuList';
import './navbar';
import logo from '../../../public/images/logo.png';


class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <nav className="navbar mobile-nav">
          <Image src={logo} alt="four shape logo" />
          <h2>Controle financeiro</h2>
          <BurgerBtn onClick={this.clickHandler} />
          {
            (open) ? <BurgerMenu open={open} onClick={this.clickHandler} /> : null
          }
        </nav>
        {/* This navbar only shows in large devices */}
        <nav className="navbar lg-nav">
          <div className="logo-title">
            <Image src={logo} alt="four shape logo" />
            <h2>Controle financeiro</h2>
          </div>
          <MenuList links={['Dashboard', 'Resumo', 'Configurações']} className="menu-list-lg" />
        </nav>
      </>
    );
  }
}

export default Navbar;
