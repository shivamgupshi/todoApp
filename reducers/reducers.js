import {
      combineReducers
  } from 'redux'
  import {
      ADD_TODO,
      Delete_TODO,
      recieved_All_TODO
  } from '../actions/actions'
  
  
  function todos(state = [], action) {

      switch (action.type) {
  
          case ADD_TODO:
              if (action.text) {
                  action.text = JSON.parse(action.text);
              }
              console.log(action.text)
              return [
                  ...state,{
                        id: action.text.id,
                        todo:action.text.todo,
                        isCompleted: action.text.isCompleted
                  }
                  
              ]
              //delete reducers    
          case Delete_TODO:
              console.log(action)
              let instanceObject = [];
              let ins = state;
  
  
              ins.filter(function(e, i) {
                  if (e.id !== action.id) {
                      instanceObject.push(e)
                  }
  
              })
              return instanceObject
              //get all todos
          case recieved_All_TODO:
  
              return action.data
  
          default:
              return state
  
  
      }
  
  }
  const todoApp = combineReducers({
      todos
  })
  export default todoApp