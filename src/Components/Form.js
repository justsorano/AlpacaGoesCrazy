import React, { useState } from 'react'

export const Form = () =>{
   const [value,setValue] = useState({
      continent:'',
      region:''
   })
   const inputHandler = e =>{
      setValue({
         [e.target.name]:e.target.value
      })
   }
   return (
      <div className='form'>
         <form className='form__contant'>
            <input className='form__input'
            value={value}
            name='continent'
            value={value.continent}
            placeholder='Tap continent...'
            onChange={inputHandler}/>
            <input className='form__input'
            value={value}
            name='region'
            value={value.region}
            placeholder='Tap region...'
            onChange={inputHandler}/>
            <button className='form__submit'>push</button>
         </form>
      </div>
   )
}