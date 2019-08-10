import React from 'react';
import PropTypes from 'prop-types';

const MenuList = (props) => {
  const { links, className } = props;
  return (
    <ul className={className}>
      { links.map((link, idx) => <li key={idx}>{link}</li>) }
    </ul>
  );
};

MenuList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

MenuList.defaultProps = {
  className: 'default-list',
};

export default MenuList;
