import React from 'react'
import PropTypes from 'prop-types'
import Continent from './Continent'
import { connect } from 'react-redux'
const Earth = ({data}) =>{

   return (
      <main className='earth'>
            {data.map((i,idx) => <Continent key={idx} data={i} id={idx}></Continent>)}
      </main>
   )
}
const mapStateToProps = state =>({
   data:state.data,
})
Earth.propTypes = {
   data:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default connect(mapStateToProps,null)(Earth)