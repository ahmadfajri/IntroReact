import * as React from 'react'

let TimeElapsed = props => {
  let [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    let intervalId = setInterval(() => {
      setSeconds(detik => detik + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])
  return <div>
    {seconds} detik.
  </div>
}

export default TimeElapsed