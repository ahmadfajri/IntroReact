import * as React from 'react'

const InputText = ({ label, value, onCustomChange }) => {

  return <label>
    {label} : <input type='text' value={value} onChange={onCustomChange} />
  </label>
}

export default InputText;