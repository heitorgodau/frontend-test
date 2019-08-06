import React from 'react';
import Option from './Option';

const Input = (props) => {
  const { label, id, type, name, value, onChange, placeholder } = props;
  if (type === 'select') {
    return (
      <label htmlFor={id}>
        {label}
        <select name={name} id={id} onChange={(e) => onChange(e)}>
          <Option value="Compra">Compra</Option>
          <Option value="Venda">Venda</Option>
        </select>
      </label>
    );
  }
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
    </label>
  );
};

export default Input;
