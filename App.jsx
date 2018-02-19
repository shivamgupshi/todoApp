import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { addTodo } from './actions/actions'
//import { removeTodo,togglecompTodos } from './actions/actions'
import {fetchTodos ,createTodos,destroyTodos,patchTodos} from './actions/actions'
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import Home from './components/Home.js';
import Login from './components/Login.js';


class App extends Component {
   render() {

      const { dispatch,visibleTodos} = this.props;
    
      return (
         <div>
            <AddTodo onAddClick = {text =>dispatch(createTodos(text))} />
            <TodoList todos = {visibleTodos} removeTodo={text =>dispatch(destroyTodos(text))} toggleTodo = {text =>dispatch(patchTodos(text))}/>
          
          
           { /*Login Page functionality*/}
           <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/HomePage'}>Home</Link></li>
                  <li><Link to={'/LoginPage'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/HomePage' component={Home} />
                  <Route exact path='/LoginPage' component={Login} />
               </Switch>
            </div>
         </Router>
         { /*Login Page functionality ends*/}
           
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