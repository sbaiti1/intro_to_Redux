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