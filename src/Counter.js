import * as React from 'react'

const Counter = () => {
  let number = 0
  const increment = () => {
    number += 1
    console.log(number);
  }

  return <div>
    <h1>Counter App</h1>
    <p>Nilai counter saat ini: {number}</p>
    <button onClick={increment}>+</button>
  </div>
}
export default Counter