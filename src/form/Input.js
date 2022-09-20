import React from 'react';

const Input = ({
  id,
  label,
  value,
  type,
  onBlur,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
