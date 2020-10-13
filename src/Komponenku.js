import * as React from 'react'

const Komponenku = props => {

  let [menu, setMenu] = React.useState([]);

  const fetchMenu = React.useCallback(() => {
    return ['nasi padang', 'nasi uduk', 'nasi gudeg']
  }, []);

  React.useEffect(() => {

    let data = fetchMenu()
    setMenu(data)
  }, [fetchMenu])

  return <div>
    {menu.map(makanan => <div>{makanan}</div>)}
  </div>
}

export default Komponenku