import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Region } from './Region'
import {closeTest,showTest} from '../Redux/actions'
const Continent = ({data,closeTest,showTest,Data}) =>{
   const [active,setActive] = useState(false)
   const [styles,setStyles] = useState(['continent__title'])

   const activeChange = () => setActive(!active)
   const titleHandler = e =>{
      if(e.target.textContent === Data[Data.length - 1].name){
         closeTest(e.target.textContent)
      } else {
         showTest()
      }
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
               {data.children ? active && data.children.map(i =><Region key={i} data={i.children}/>) : <div></div>}
            </div>
         </div>
      </div>
   )
}
const mapDispatchToProsp = ({
   closeTest,showTest
})
const mapStateToProps = state =>({
   Data:state.data
})
export default connect(mapStateToProps,mapDispatchToProsp)(Continent)