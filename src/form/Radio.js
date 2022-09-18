import React from 'react';

const Radio = ({ options, name, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            value={option}
            name={name}
            type="radio"
            checked={value === option}
            onChange={({ target }) =>
              setValue((form) => ({ ...form, [target.name]: target.value }))
            }
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
