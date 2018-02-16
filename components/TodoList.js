import React, { Component, PropTypes } from 'react'
// /import styles from'./style.css'


export default class TodoList extends Component {
    removeItem(item, i) {
        
        this.props.removeTodo(item, i);
    }
   render() {
    
      return (
         <ul>
            {this.props.todos.map((todo,i) =>
            
           <li ref = 'del' id = {todo.id} key={i} >
           {todo.todo} 
           <button onClick={() => { this.removeItem(todo, i)}} >Delete</button>  
        </li>
            )}
         </ul>
      )
   }
}