import React from 'react';

const Select = ({ options, value, setValue, id, ...props }) => {
  return (
    <select
      {...props}
      id={id}
      value={value}
      onChange={({ target }) =>
        setValue((form) => ({ ...form, [target.id]: target.value }))
      }
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
