import React, { useState } from 'react'
import { Region } from './Region'

export const Continent = ({data}) =>{
   const [active,setActive] = useState(false)
   const [styles,setStyles] = useState(['continent__title'])

   const activeChange = () => setActive(!active)
   const titleHandler = () =>{
      if(styles.includes('_active')){
         setStyles(['continent__title'])
         activeChange()
         return
      }
         setStyles(prev => [...prev,'_active'])
         activeChange()
   }

   return(
      <div className='continent' >
         <div className='continent__contant'>
            <h2 className={styles.join(' ')} onClick={titleHandler}>{data.name}</h2>
            <div className='continent__children'>
               {active && data.children.map(i =><Region key={i} data={i.children}/>)}
            </div>
         </div>
      </div>
   )
}