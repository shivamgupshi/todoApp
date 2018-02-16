import React, { Component, PropTypes } from 'react'


export default class AddTodo extends Component {
   render() {
      return (
      
        <div id="myDIV">
             <h2>My To Do List</h2>
             <input type = 'text' ref = 'input' />
			 <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
        </div>
      )
   }
   handleClick(e) {
      const node = this.refs.input;
      const text = node.value.trim();
      this.props.onAddClick(text);
      node.value = ''
      return false;
   }
}