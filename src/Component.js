import * as React from 'react'

const Component = props => {
  let [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setCounter(counter + 1);
  }, [counter]);

  return <div>
    {counter}
  </div>
}

export default Component