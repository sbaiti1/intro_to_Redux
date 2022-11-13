# Introduction to Redux


![redux](https://user-images.githubusercontent.com/91995474/201539053-5504a5db-77f4-477c-ace0-5019d6946e4c.png)

## Installation guide

Add Redux to an existing project

```bash
npm install redux react-redux
```

Create a new project with Redux

```bash
npx create-react-app my-app --template redux
```

# The three principles of Redux

- **Single source of truth:** It helps to create universal apps. The state of the application is stored in one object tree called **store**. It means one app, one store.
- **State is read-only (Immutability):** It means that we don’t change the state object and its properties directly. Instead of this make a new object, recalculate the new application state and update it with our newly created object. And this is important because all the changes are happening in the same place so everything is needed to be done in strict order and one by one.
- **Changes are made with pure functions (reducers):** Reducers are pure functions that take previous state and action (discuss later) and return the new state.

## Actions

**Actions** are a plain **JavaScript object** that contains **the only source of information for the store**. Actions have a **type** field that tells what kind of action to perform and all other fields contain information or data .

```jsx
export const increment = (n)=>{
    return {
        type : 'INC' , 
        velocity : n 
    }
}

export const decrement = ()=>{
    return {
        type : 'DEC' , 
        velocity : 1
    }
}
```

## Reducers

As we already know, **actions only tell what to do**, but they don’t tell how to do, so **reducers** are the pure **functions** that take the current state and action and **return the new state** and tell the store how to do .

```jsx
const counterReducer = (state = 0 , action)=>{
    switch (action.type){
      case 'INC' : 
        return state + action.velocity
      case 'DEC' : 
        return state - action.velocity
      default :
        return state
    }
  }

  export default counterReducer
```

**⚠️ Don’t forget to add the default case else you’ll get an error message like the following :** 

![error](https://user-images.githubusercontent.com/91995474/201539236-3b376064-c7d4-424e-b1ce-2c226d4bf070.png)


### Multiple Reducers!

For complex apps you’ll have to work with **multiple reducers** , to combine them you need to use **combineReducers()** 

**AllReducers.js**

```jsx
import LogginReducer from "./log";
import counterReducer from "./counter";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        counter : counterReducer ,
        loggin : LogginReducer
    }
)

export default reducers
```

## Store

The store is the object which holds the state of the application.

**Functions associated with Store:** 

- **createStore()** – To create a store
- **dispatch(action**) -To change the state
- **getState()** – for getting current state of store.

To connect our store to the App components , we need a Provider . 

The <Provider> component **makes the Redux store available to any nested components that need to access the Redux store .**

**index.js**

```jsx
import { createStore  } from 'redux'
import reducers from './reducers/allReducers'
import { Provider } from 'react-redux'
  //store
  let store = createStore(reducers , 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

   )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >

    <App />
    </Provider>
  </React.StrictMode>
)
```

**App.jsx**

```jsx
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
```

***useSelector()***  takes the current state as an argument, returns the required data, and stores the returned value as a single variable
