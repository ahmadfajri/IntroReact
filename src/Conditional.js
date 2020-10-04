import * as React from 'react';

const Conditional = () => {
  const isLogin = true
  const userName = 'Alex'

  return <div>
    {isLogin ? <b>user {userName} sudah login</b> : 'silahkan login!'}
  </div>
}

export default Conditional;