import React, { Component } from 'react';
import Image from '../imageTag';
import BurgerBtn from './BurgerBtn';
import BurgerMenu from './BurgerMenu';
import './navbar';


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
      <nav className="navbar">
        <Image src="./public/images/logo.png" />
        <h2>Controle financeiro</h2>
        <BurgerBtn onClick={this.clickHandler} />
        {
          (open) ? <BurgerMenu open={open} onClick={this.clickHandler} /> : null
        }
      </nav>
    );
  }
}

export default Navbar;
