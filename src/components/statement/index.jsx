import React from 'react';
import Table from '../table';
import TableWrap from '../table/TableWrap';
import TableRow from '../table/TableRow';


const TransactionsStatement = (props) => {
  const { transactions, count } = props;
  return (
    <>
      <h2>Extrato de transações</h2>
      <Table>
        <TableWrap head>
          <TableRow val=" ;Mercadoria;Valor" />
        </TableWrap>
        <TableWrap>
          {
            (count !== 0)
              ? transactions.map((el, idx) => {
                const { amount, transactionType, nameMerchandise } = el;
                let transactionTypeSignal = '+';
                if (transactionType === 'Compra') transactionTypeSignal = '-';
                return <TableRow key={idx} val={`${transactionTypeSignal};${nameMerchandise};R$${amount}`} />;
              })
              : null
          }
        </TableWrap>
      </Table>
    </>
  );
};

export default TransactionsStatement;
