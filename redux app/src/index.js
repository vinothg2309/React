/* import React from 'react';
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
	, app); */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

//Step 1
import createSagaMiddleware from 'redux-saga'

//Step 2
import { watchAgeUp } from './sagas-app/sagas/saga'
import reducer from './sagas-app/store/reducer';
import App from './sagas-app/App';

//STep 3: Create middleware for interception
const sagaMiddleware=createSagaMiddleware();

//Step 4: create store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

//Step 5: run watcher in background
sagaMiddleware.run(watchAgeUp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
