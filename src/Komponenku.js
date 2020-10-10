import * as React from 'react'

const Komponenku = props => {

  let [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    const fetchMenu = function () {
      return ['nasi padang', 'nasi uduk', 'nasi gudeg']
    }

    let data = fetchMenu()
    setMenu(data)
  }, [])

  return <div>
    {menu.map(makanan => <div>{makanan}</div>)}
  </div>
}

export default Komponenku