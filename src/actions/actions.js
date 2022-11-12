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