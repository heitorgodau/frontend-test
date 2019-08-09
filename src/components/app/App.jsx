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
      total: 0,
    };
    this.addCount = this.addCount.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.addTotal = this.addTotal.bind(this);
    this.getNewTransaction = this.getNewTransaction.bind(this);
    this.getAllTransactions = this.getAllTransactions.bind(this);
  }

  componentDidMount() {
    this.getAllTransactions();
    this.getTotal();
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

  getTotal() {
    const count = parseInt(localStorage.getItem('@frontend-test/count'), 10);
    let total = 0;
    for (let i = 0; i < count; i += 1) {
      const floatAmount = parseFloat(localStorage.getItem(`@frontend-test/amount${i}`).replace(/,/g, '.'));
      if (localStorage.getItem(`@frontend-test/transactionType${i}`) === 'Compra') {
        total -= floatAmount;
      } else {
        total += floatAmount;
      }
    }
    total = total.toFixed(2).toString().replace(/\./g, ',');
    localStorage.setItem('@frontend-test/total', total);
    this.setState({
      total,
    });
  }

  addTotal(transactionType, amount) {
    let total = parseFloat(localStorage.getItem('@frontend-test/total').replace(/,/g, '.'));
    const floatAmount = parseFloat(amount.replace(/,/g, '.'));
    if (transactionType === 'Compra') {
      total -= floatAmount;
    } else {
      total += floatAmount;
    }
    total = total.toFixed(2).toString().replace(/\./g, ',');
    localStorage.setItem('@frontend-test/total', total);
    this.setState({
      total,
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
    const { count, transactions, total } = this.state;
    return (
      <>
        <Navbar />
        <main className="financial-control">
          <Form
            count={count}
            addCount={this.addCount}
            getNewTransaction={this.getNewTransaction}
            addTotal={this.addTotal}
          />
          <TransactionsStatement
            count={count}
            transactions={transactions}
            total={total}
          />
        </main>
      </>
    );
  }
}

export default App;
