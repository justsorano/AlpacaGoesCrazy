import React, { useState } from 'react'

export const Form = () =>{
   const [value,setValue] = useState({
      continent:'',
      country:''
   })
   const inputHandler = e =>{
      setValue(prev =>({
         ...prev,
         [e.target.name]:e.target.value
      }))
   }
   const submitHandler = e =>{
      e.preventDefault()
      const newArray = {...value}
      console.log(newArray)
   }
   return (
      <div className='form' onSubmit={submitHandler}>
         <form className='form__contant'>
            <input className='form__input'
            name='continent'
            value={value.continent}
            placeholder='Tap continent...'
            onChange={inputHandler}
            required/>
            <input className='form__input'
            name='country'
            value={value.country}
            placeholder='Tap country...'
            onChange={inputHandler}
            required/>
            <button className='form__submit'>push</button>
         </form>
      </div>
   )
}