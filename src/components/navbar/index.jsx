import React, { Component } from 'react';
import HamburguerMenu from 'react-hamburger-menu';
import { slide as Menu } from 'react-burger-menu'
import Image from '../imageTag';
import './navbar';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  menuHandler() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu> */}
        <nav className="navbar">
          <Image className="logo" alt="logo with four shapes" src="./public/images/logo.png" />
          <h1 className="title">Controle Financeiro</h1>
          <HamburguerMenu
            isOpen={open}
            menuClicked={this.menuHandler.bind(this)}
            width={18}
            height={15}
          />
        </nav>
      </>
    );
  }
}

export default Navbar;
