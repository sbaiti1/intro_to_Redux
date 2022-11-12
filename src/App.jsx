import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { decrement, increment } from './actions/actions'

function App() {

 const isLogged = useSelector(state =>state.loggin) 
 const counter = useSelector(state =>state.counter) 

 const dispatch = useDispatch()
 return (
    <div className="App">
       
      <h3>  hello world </h3>
      <button onClick={()=>dispatch(increment(4))} >+</button>
      <h3> {counter} </h3>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <br /><br />
      {isLogged ? 'hello you are successfuly logged in' : "try to sign in"}
    </div>
  )
}

export default App
