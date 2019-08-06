import React, { Component } from 'react';
import Navbar from '../navbar';
import Form from '../form';
import TransactionsStatement from '../statement';
import './app';

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      count: 0,
    };
    this.addCount = this.addCount.bind(this);
    this.getNewTransaction = this.getNewTransaction.bind(this);
    this.getAllTransactions = this.getAllTransactions.bind(this);
  }

  componentDidMount() {
    this.getAllTransactions();
    this.setState({
      count: localStorage.getItem('@frontend-test/count') || 0,
    });
  }

  getAllTransactions() {
    const count = localStorage.getItem('@frontend-test/count');
    const allTransactions = [];
    for (let i = 0; i < count; i += 1) {
      allTransactions.push({
        transactionType: localStorage.getItem(`@frontend-test/transactionType${i}`),
        nameMerchandise: localStorage.getItem(`@frontend-test/nameMerchandise${i}`),
        amount: localStorage.getItem(`@frontend-test/amount${i}`),
      });
    }
    this.setState({
      transactions: allTransactions,
      count,
    });
  }

  getNewTransaction() {
    const count = localStorage.getItem('@frontend-test/count');
    const { transactions } = this.state;
    const transactionsCopy = [...transactions];
    console.log('cooooount', count);
    console.log('locaaaaal', localStorage.getItem(`@frontend-test/nameMerchandise${count}`));
    transactionsCopy.push({
      transactionType: localStorage.getItem(`@frontend-test/transactionType${count}`),
      nameMerchandise: localStorage.getItem(`@frontend-test/nameMerchandise${count}`),
      amount: localStorage.getItem(`@frontend-test/amount${count}`),
    });
    this.setState({
      transactions: transactionsCopy,
      count,
    });
  }

  addCount() {
    let count = parseInt(localStorage.getItem('@frontend-test/count'), 10);
    count += 1;
    localStorage.setItem('@frontend-test/count', count);
    this.setState({
      count: localStorage.getItem('@frontend-test/count'),
    });
  }

  render() {
    const { count, transactions } = this.state;
    return (
      <>
        <Navbar />
        <Form count={count} addCount={this.addCount} getNewTransaction={this.getNewTransaction} />
        <TransactionsStatement count={count} transactions={transactions} />
      </>
    );
  }
}

export default App;
