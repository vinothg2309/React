/* 

/* import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger' //Middleware
import { composeWithDevTools } from "redux-devtools-extension"; */

/* Order - create --> Dispatch --> reducer --> subscribe */
/* const reducer=function(state,action){
    if(action.type === 'INC'){
        return state+action.payload
    }
    if(action.type === 'DEC'){
        return state-action.payload
    }
    return state;
}

const middleware = applyMiddleware(logger)
const store = createStore(reducer, 1, middleware)

store.subscribe(() =>{
    console.log('Store Changed: '+ store.getState())
})

store.dispatch({type:'INC', payload:10})
store.dispatch({type:'DEC', payload:5})
store.dispatch({type:'MUL', payload:5}) */

/* const userReducer = (state={},action) => {
    switch(action.type){
        case "CHANGE_NAME":{
            return state={...state,name: action.payload}
        }
        case "CHANGE_AGE":{
            return state={...state,age: action.payload}
        }
    }
    return state
}

const tweetsReducer = (state={},action) => {
    return state
}

const reducers = combineReducers({
    user: userReducer,
    tweet: tweetsReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)))

store.subscribe( () => {
    console.log('Store Changed : ', store.getState)
})

store.dispatch( {type: 'CHANGE_NAME', data: 'Vinoth'})
store.dispatch( {type: 'CHANGE_AGE', data: 45})
store.dispatch( {type: 'CHANGE_NAME', data: 'Kiruba'}) */

//state tree + component tree = DOM tree
i/* mport {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // npm install redux-thunk --save
import { composeWithDevTools } from "redux-devtools-extension";
//npm install  axios --save
import axios from 'axios';

// state tree +Component= DOM tree
const initialState={
    fetching:false,
    fetched:false,
    users:[],
    error:null
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "FETCH_USERS_START":{
            return {...state,fetching:true}      
        }
        case "FETCH_USERS_ERROR":{
            return {...state,fetching:false,error:action.payload}            
        }
        case "RECEIVED_USERS":{
            return {...state,
                       fetching:false,
                       fetched:true,
                       users:action.payload,
                    }         
        }
    }
    return state;
}

const store=createStore(reducer,
    composeWithDevTools (applyMiddleware(thunk,logger)));

store.subscribe(()=>console.log(store.getState()))

//thunk middleware expects only one dipatch
store.dispatch((dispatch)=>{
    //multiple actions occur with single action     
    dispatch({type:"FETCH_USERS_START"})

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then ( (response) =>{
       dispatch({type:"RECEIVED_USERS",payload:response.data})
    })
    .catch((error) =>{
      dispatch({type:"FETCH_USERS_ERROR",payload:error})
    })
})// end of code */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './store/store'
import App from './App'

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
  		<App/>
	</Provider>
	, app);