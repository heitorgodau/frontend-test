import React from 'react';

const Image = (props) => {
  const { className, src, alt } = props;
  return (
    <figure className={className}>
      <img src={src} alt={alt} />
    </figure>
  );
};

export default Image;
