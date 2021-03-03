import React, { useReducer } from 'react'

const initialState = {count:10}

function reducer(state, action){
    switch(action.type){
        case 'INC':
            return {count:state.count+1}
        case 'DEC':
            return {count:state.count-1}
    }
}

function Demo(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Use Reducer Demo by Murthy</h1>
            <p>count : {state.count }</p>
            <button onClick={() => dispatch({type:'INC'})}>+</button>
            <button onClick={() => dispatch({type:'DEC'})}>-</button>
        </div>
    )
}

export default Demo