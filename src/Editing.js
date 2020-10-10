import * as React from 'react'

const Editing = ({ value }) => {
  let [text, setText] = React.useState("")
  let [seconds, setSeconds] = React.useState(0)

  React.useEffect(function () {
    if (text.length) localStorage.setItem("edit-text", text)
    console.log("sinkronisasi ke local storage")
  }, [text])

  React.useEffect(function () {
    setText(localStorage.getItem("edit-text"))

    let intervalId = setInterval(() => {
      setSeconds(second => second + 1)
    }, 1000)

    return function () {
      clearInterval(intervalId)
    }

  }, [])
  return (
    <>
      Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
      <br />
      <textarea value={text} onChange={e => setText(e.target.value)} />
    </>
  )
}

export default Editing