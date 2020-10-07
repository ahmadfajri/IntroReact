import * as React from 'react'

const ControlledForm = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()

    alert(name)
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <input type="submit" value="Submit" />
  </form>
}

export default ControlledForm