import React from 'react';
import Table from '../table';
import TableWrap from '../table/TableWrap';
import TableRow from '../table/TableRow';
import './statement';


const TransactionsStatement = (props) => {
  const { transactions, count, total } = props;
  return (
    <section className="transactions">
      <h2>Extrato de transações</h2>
      <Table>
        <TableWrap head>
          <TableRow head val=" ;Mercadoria;Valor" />
        </TableWrap>
        <TableWrap>
          {
            (count !== 0)
              ? transactions.map((el, idx) => {
                const { amount, transactionType, nameMerchandise } = el;
                let transactionTypeSignal = '+';
                if (transactionType === 'Compra') transactionTypeSignal = '-';
                return <TableRow head={false} key={idx} val={`${transactionTypeSignal};${nameMerchandise};R$${amount}`} />;
              })
              : null
          }
        </TableWrap>
      </Table>
      <div className="total">
        <h3>Total</h3>
        <h3>{`R$${total}`}</h3>
      </div>
      {
        (parseInt(total, 10) !== 0)
          ? (
            <div className="total-state">
              {
                (parseInt(total, 10) > 0) ? '[Lucro]' : '[Prejuizo]'
              }
            </div>
          )
          : null

      }
    </section>
  );
};

export default TransactionsStatement;
