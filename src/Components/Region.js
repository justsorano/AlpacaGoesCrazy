import React from 'react'
export const Region = ({data}) =>{
   return data.map((i,idx) => <li className={`region`} key={idx}>{i}</li>)
}
