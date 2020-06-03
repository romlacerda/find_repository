import React from 'react';
import { Input as InputStyle } from './style';

function Input({ placeholder, onChange }) {
  return <InputStyle placeholder={placeholder} onChange={onChange}/>;
}

export default Input;
