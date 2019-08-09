import React from 'react';

const MenuList = (props) => {
  const { links, className } = props;
  return (
    <ul className={className}>
      { links.map((link, idx) => <li key={idx}>{link}</li>) }
    </ul>
  );
};

export default MenuList;
