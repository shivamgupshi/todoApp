import React, { Component, PropTypes } from 'react'
// /import styles from'./style.css'


export default class TodoList extends Component {
    removeItem(item, i) {    
        this.props.removeTodo(item, i);
    }
    toggleitem(item){
        item.isCompleted = (item.isCompleted ? false : true)
        this.props.toggleTodo(item);
    }
    
    render() {
    
      return (
         <ul>
            {this.props.todos.map((todo,i) =>
            
           <li ref = 'del' id = {todo.id} key={i} onClick={() => { this.toggleitem(todo)}}  >
           {todo.todo} 
           <button onClick={() => { this.removeItem(todo, i)}} >Delete</button> 
               <span>{todo.isCompleted ? 'Completed':'Not Completed'}</span>
        </li>
            )}
         </ul>
      )
   }
}