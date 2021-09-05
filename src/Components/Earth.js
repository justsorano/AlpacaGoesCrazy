import React from 'react'
import Continent from './Continent'
import { connect } from 'react-redux'

const Earth = ({data}) =>{
   return (
      <div className='earth'>
         <div className='earth__contant'>
            <div>
            {data.map(i => <Continent key={i.name} data={i}></Continent>)}
            </div>
         </div>
      </div>
   )
}
const mapStateToProps = state =>({
   data:state.data
})
export default connect(mapStateToProps,null)(Earth)