import React from 'react'

import { render } from 'react-dom'
import { createStore , applyMiddleware  } from 'redux'
import { fetchTodos, addTodo ,createTodos , updateTodos,patchTodos,createspecificTodos} from './actions/actions'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import App from './App.jsx'
import todoApp from './reducers/reducers'

let store = createStore(todoApp , applyMiddleware(thunk))

let rootElement = document.getElementById('app')

render(
   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)

store.dispatch(fetchTodos())

//   store.dispatch(updateTodos( {
//     "todo": "Shivam",
//     "id": 1
//   }))

//   store.dispatch(patchTodos( {
//     "todo": "Sachin tendulkar"
    
//   }))

 // store.dispatch(createspecificTodos())
//console.log(store.getState())
