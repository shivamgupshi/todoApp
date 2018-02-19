import {
      combineReducers
  } from 'redux'
  import {
      ADD_TODO,
      Delete_TODO,
      recieved_All_TODO,togglecompletedTodos
  } from '../actions/actions'
  
  
  function todos(state = [], action) {

      switch (action.type) {
             case ADD_TODO:
                    if (action.text) {
                        action.text = JSON.parse(action.text);
                  }
                      //  console.log(action.text)
                        return [
                              ...state,{
                              id: action.text.id,
                              todo:action.text.todo,
                              isCompleted: action.text.isCompleted
                              }
                        ]
              //delete reducers    
            case Delete_TODO:
                  
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
           
            case togglecompletedTodos:
                     
                    if ( action.data) {
                              action.data = JSON.parse(action.data);
                        }
                        let instanceObj = [];
                        let inst = state;
                   //     console.log(action.data.id)
                   //     console.log(inst)
                        inst.filter(function(e, i) {
                              if (e.id == action.data.id) {
                                    e.isCompleted = action.data.isCompleted;
                              }
                              instanceObj.push(e)
                        })
                        
                   return instanceObj
  
            default:
              return state
  
  
      }
  
  }
  const todoApp = combineReducers({
      todos
  })
  export default todoApp