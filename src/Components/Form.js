import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addData } from '../Redux/actions'
const Form = ({addData}) =>{
   const [value,setValue] = useState({
      name:'',
      children:''
   })
   const inputHandler = e =>{
      setValue(prev =>({
         ...prev,
         [e.target.name]:e.target.value
      }))
   }
   const submitHandler = e =>{
      e.preventDefault()
      const data = {
         name :value.name,
         children:value.children.split(',')
      }
      addData(data)
      setValue({
         name:'',
         children:''
      })

   }
   return (
      <div className='form'>
         <form className='form__contant' onSubmit={submitHandler}>
         <legend className='form__legend _legend' >This form have two work opportunities: if name match to the nest title then add child to this nest pool and if not match create a new nest (please use comma) to separate words in the children input </legend>
            <input className='form__input'
            name='name'
            value={value.name}
            placeholder='Tap name...'
            onChange={inputHandler}
            required
            />
            <input className='form__input'
            name='children'
            value={value.children}
            placeholder='Tap children...'
            onChange={inputHandler}
            required/>
            <button className='form__submit' type='submit'>Submit</button>
         </form>
      </div>
   )
}
const mapDispatchToProps = ({
   addData
})
Form.propTypes = {
   addData: PropTypes.func.isRequired
}
export default connect(null,mapDispatchToProps)(Form)