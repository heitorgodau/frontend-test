import React from 'react';

const TableWrap = (props) => {
  const { children, head } = props;

  if (head) return <thead>{children}</thead>;

  return <tbody>{children}</tbody>;
};

export default TableWrap;
