import React from 'react'

export const App = (p:{m: string}) => {
  return (
    <div>
       
        <h1>{p.m}</h1>
        <h2>Count: {c}</h2>
        <button >Increment</button>
       
    </div>
  )
}
