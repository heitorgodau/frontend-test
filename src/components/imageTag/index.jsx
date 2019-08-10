import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { className, src, alt } = props;
  return (
    <figure className={className}>
      <img src={src} alt={alt} />
    </figure>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: 'default-img',
};

export default Image;
