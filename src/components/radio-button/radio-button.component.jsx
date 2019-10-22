import React from 'react';

import './radio-button.styles.scss';

const RadioButton = ({ handleChange, label, ...otherProps }) => (
  <div className="radio-group">
    <input id={label} type='radio' {...otherProps} />
    <label htmlFor={label}>{label}</label>
  </div>
);

export default RadioButton;
