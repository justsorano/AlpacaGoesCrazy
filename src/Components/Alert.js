import React from 'react'

const Alert = ({hideAlert}) =>{
   return (
      <div className='alert _legend' >
         <div>
         <h2>Warning!</h2>
         <div>I`m use fake data base (static) and data which you add to store will disappear when you click to static data title</div>
         </div>
         <button onClick={hideAlert}>&times;</button>
      </div>
   )
}
export default Alert