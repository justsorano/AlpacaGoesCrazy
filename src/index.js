import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './Redux/rootReducer'
import './assets/scss/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer,compose(devtools))
const app = (
   <Provider store={store}>
      <App/>
   </Provider>
)
render(app,document.getElementById('root'))
reportWebVitals()
