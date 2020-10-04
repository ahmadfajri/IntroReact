import * as React from 'react'

const List = () => {
  const users = [
    { id: 1, name: 'Albert', gender: 'male' },
    { id: 2, name: 'Romy', gender: 'male' },
    { id: 3, name: 'Shinta', gender: 'female' },
    { id: 4, name: 'Hendra', gender: 'male' },
    { id: 5, name: 'Fenny', gender: 'female' },
    { id: 6, name: 'Desta', gender: 'male' },
  ]

  const displayUser = users.map((user) => <li key={user.id}>{user.name} ({user.gender})</li>)
  return <ul>{displayUser}</ul>
}

export default List;