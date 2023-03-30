import React, { useCallback, useState } from 'react'

export const App = (p:{m: string}) => {
    const [c, setC] = useState(0)

    const handleClick = useCallback(() => {
        setC(c + 1)
    }, [c])
  return (
    <div>
       
        <h1>{p.m}</h1>
        <h2>Count: {c}</h2>
        <button onClick={handleClick}>Increment</button>
       
    </div>
  )
}
