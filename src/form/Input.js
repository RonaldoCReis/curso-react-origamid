import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) =>
          setValue((form) => ({ ...form, [id]: target.value }))
        }
        {...props}
      />
    </>
  );
};

export default Input;
