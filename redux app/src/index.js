import { createStore } from 'redux'

/* Order - create --> Dispatch --> reducer --> subscribe */
const reducer=function(state,action){
    if(action.type === 'INC'){
        return state+action.payload
    }
    if(action.type === 'DEC'){
        return state-action.payload
    }
    return state;
}

const store = createStore(reducer, 1)

store.subscribe(() =>{
    console.log('Store Changed: '+ store.getState())
})

store.dispatch({type:'INC', payload:10})
store.dispatch({type:'DEC', payload:5})
store.dispatch({type:'MUL', payload:5})