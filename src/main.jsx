import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore  } from 'redux'
import reducers from './reducers/allReducers'
import { Provider } from 'react-redux'
  //store
  let store = createStore(reducers , 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

   )
 // store.subscribe(()=>console.log(store.getState()))
 // store.dispatch(increment())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >

    <App />
    </Provider>
  </React.StrictMode>
)
