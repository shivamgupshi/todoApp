import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'
import { removeTodo } from './actions/actions'
import {fetchTodos , createTodos,destroyTodos} from './actions/actions'
import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'


class App extends Component {
   render() {
     //  console.log(this.props)
      const { dispatch,visibleTodos} = this.props;
      console.log(this.props)
      return (
         <div>
            <AddTodo onAddClick = {text =>dispatch(createTodos(text))} />
            <TodoList todos = {visibleTodos} removeTodo={text =>dispatch(destroyTodos(text))}/>
           
         </div>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(App);