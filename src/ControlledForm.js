import * as React from 'react'

const ControlledForm = () => {
  const [name, setName] = React.useState('')
  const [isMember, setIsMember] = React.useState(false)
  const [gender, setGender] = React.useState(0)
  const [comment, setComment] = React.useState('')
  const [category, setCategory] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const formData = { name, isMember, gender, comment, category }
    console.log(formData)
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>
      Member: <input type="checkbox" checked={isMember} onChange={(e) => setIsMember(e.target.checked)} />
    </label>
    <label>
      Gender:
      <input type="radio" name="gender" checked={gender === 1} onChange={(e) => setGender(1)} /> Male
      <input type="radio" name="gender" checked={gender === 0} onChange={(e) => setGender(0)} /> Female
    </label>
    <label>
      Comment: <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
    </label>
    <label>
      Category:
      <select value={category} onChange={(e) =>
        setCategory(e.target.value)}>
        <option value='food'>Food</option>
        <option value='drink'>Drink</option>
      </select>
    </label>
    <input type="submit" value="Submit" />
  </form>
}

export default ControlledForm