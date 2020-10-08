import * as React from 'react'
import InputText from './InputText'

const FormBasicValidation = () => {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: ''
  })

  const [error, setError] = React.useState({
    name: 'name minimal 3 karakter ',
    phone: 'phone minimal 3 karakter ',
    email: 'email minimal 3 karakter '
  })

  const handleSubmit = event => {
    event.preventDefault()
    if (error['name'].length > 0) {
      alert(error['name'])
    } else if (error['phone'].length > 0) {
      alert(error['phone'])
    } else if (error['email'].length > 0) {
      alert(error['email'])
    } else {
      alert('Validasi sukses')
    }
  }

  const handleChange = (field, e) => {
    setError('')
    const value = e.target.value
    if (value.length < 3) {
      setError({ ...error, [field]: `${field} minimal 3 karakter` })
    } else {
      setError({ ...error, [field]: '' })
    }
    setForm({ ...form, [field]: value })
  }

  return <form onSubmit={handleSubmit}>
    {error.name}
    <InputText label="Name" value={form.name} onChange={(e) => handleChange('name', e)} />
    {error.phone}
    <InputText label="Phone" value={form.phone} onChange={(e) => handleChange('phone', e)} />
    {error.email}
    <InputText label="Email" value={form.email} onChange={(e) => handleChange('email', e)} />
    <input type="submit" value="submit" />
  </form>
}

export default FormBasicValidation