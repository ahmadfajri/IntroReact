import * as React from 'react'

const InputText = ({ label }) => {
  const [value, setValue] = React.useState('')

  return <label>
    {label} : <input type='text' value={value} onChange={(e) =>
      setValue(e.target.value)} />
  </label>
}

export default InputText;