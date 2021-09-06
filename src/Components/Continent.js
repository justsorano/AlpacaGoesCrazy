import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Region } from './Region'
import {closeCollapsing,openCollapsing} from '../Redux/actions'
const Continent = ({data,closeCollapsing,openCollapsing,rootData}) =>{
   const [active,setActive] = useState(false)
   const [styles,setStyles] = useState(['continent__title'])

   const activeChange = () => setActive(!active)
   const titleHandler = e =>{
      const lastElement = rootData[rootData.length - 1]
      const targetContent = e.target.textContent
      if(targetContent === lastElement.name){
         closeCollapsing(targetContent)
      } else {
         openCollapsing()
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
      <div className='continent'>
            <h2 className={styles.join(' ')} onClick={titleHandler}>{data.name}</h2>
            <ul className='continent__children'>
               {data.children ? active && data.children.map((i,idx) =><Region key={idx} data={i.children}/>) : <div></div>}
            </ul>
      </div>
   )
}
const mapDispatchToProsp = ({
   closeCollapsing,openCollapsing
})
const mapStateToProps = state =>({
   rootData:state.data,
   activee:state.app.active
})
Continent.propTypes = {
   closeCollapsing: PropTypes.func.isRequired,
   openCollapsing: PropTypes.func.isRequired,
   rootData: PropTypes.arrayOf(PropTypes.object).isRequired,
   data: PropTypes.object.isRequired,
}
export default connect(mapStateToProps,mapDispatchToProsp)(Continent)