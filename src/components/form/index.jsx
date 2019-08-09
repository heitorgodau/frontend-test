import React, { Component } from 'react';
import Input from '../input';
import Button from '../button';
import './form';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionType: 'Compra',
      nameMerchandise: '',
      amount: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const { transactionType, nameMerchandise, amount } = this.state;
    const { addCount, count, getNewTransaction, addTotal } = this.props;
    localStorage.setItem('@frontend-test/count', count);
    localStorage.setItem(`@frontend-test/transactionType${count}`, transactionType);
    localStorage.setItem(`@frontend-test/nameMerchandise${count}`, nameMerchandise);
    localStorage.setItem(`@frontend-test/amount${count}`, amount);
    this.setState({
      transactionType,
      nameMerchandise: '',
      amount: '',
    });
    getNewTransaction();
    addTotal(transactionType, amount);
    addCount();
  }

  render() {
    const { transactionType, nameMerchandise, amount } = this.state;
    return (
      <form className="insert-transacion" onSubmit={e => this.handleSubmit(e)}>
        <Input
          label="Tipo de transação"
          id="type-transaction"
          type="select"
          name="transactionType"
          value={transactionType}
          onChange={this.handleChange}
        />
        <Input
          label="Nome da mercadoria"
          id="name-merchandise"
          type="text"
          name="nameMerchandise"
          placeholder="input"
          value={nameMerchandise}
          onChange={this.handleChange}
        />
        <Input
          label="Valor"
          id="amount"
          type="text"
          name="amount"
          placeholder="R$ 0,00"
          value={amount}
          onChange={this.handleChange}
        />
        <Button type="submit" className="btn">Adicionar transação</Button>
      </form>
    );
  }
}

export default Form;
