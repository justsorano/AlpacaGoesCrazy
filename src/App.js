import React, { useEffect } from 'react'
import Earth from './Components/Earth'
import Form from './Components/Form'
import Alert from './Components/Alert'
import { showAlert,hideAlert } from './Redux/actions'
import { connect } from 'react-redux'
function App({showAlert,hideAlert,alert}) {
  useEffect(() =>{
    setTimeout(() => {
      showAlert()
    }, 2000);
  },[])
  return (
    <div className='app'>
      <div className='app__wrapper'>
        {alert ? <Alert hideAlert={hideAlert}/> : null}
        <Earth/>
        <Form/>
      </div>
    </div>
  )
}
const mapStateToProps = state =>({
  alert:state.app.alert
})
const mapDispatchToProsp = ({
  showAlert,hideAlert
})
export default connect(mapStateToProps,mapDispatchToProsp)(App)
