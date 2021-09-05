import React from 'react'
export const Region = ({data}) =>{
   return (
      <div className='region'>
      {data.map(i => <div className='region__title' key={i}>{i}</div>)}
      </div>
   )
}
