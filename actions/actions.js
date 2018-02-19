export const ADD_TODO = 'ADD_TODO'
export const Delete_TODO = 'Delete_TODO'
export const recieved_All_TODO = 'recieved_All_TODO'
export const create_TODO_user = 'create_TODO_user'
export const togglecompletedTodos = 'togglecompletedTodos'

//export const updateTodos = 'updateTodos'
import fetch from 'cross-fetch'
let nextTodoId = 0;

export function addTodo(text) {

    return {
        type: ADD_TODO,
        text
    };
}

export function removeTodo(text) {
    return {
        type: Delete_TODO,
        id: text.id,
        text

    };
}



export function getAllTodos(data) {
    return {
        type: recieved_All_TODO,
        data
    }

}

export function createTodosUser(data) {
    return {
        type: create_TODO_user,
        data
    }

}




export function togglecompTodos(data) {
    return {
        type: togglecompletedTodos,
        data
    }

}


//get all todos
export function fetchTodos() {
    return function(dispatch) {
        return fetch(`http://localhost:3000/Todos`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(getAllTodos(json)))
            .catch((d) => console.log(d)); 
    }
}

// create todos
export function createTodos(data) {
 
    return function(dispatch) {
        return fetch(`http://localhost:3000/Todos`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todo: data,
                    isCompleted: false
                }),
            })
            .then((d) =>dispatch(addTodo(d._bodyText)))
            .catch((d) => console.log(d)); 

    }
}

//get specific todos
export function createspecificTodos(data) {
        return function(dispatch) {
            return fetch(`http://localhost:3000/Todos/8`)
                .then(
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                )
                .then(( json => console.log(json))
                
                ) .catch((d) => console.log(d)); 
        }
    }
    


//destroying todos
export function destroyTodos(data) {
    return function(dispatch) {
        console.log(dispatch)
        return fetch(`http://localhost:3000/Todos/${data.id}`, {
            method: 'DELETE',
        }).then((d) => dispatch(removeTodo(data)))
          .catch((d) => console.log(d));  
    }

}

//updating todos
export function updateTodos(formValues) {
    return function(dispatch) {
        return fetch(`http://localhost:3000/Todos/1`, {
            method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
        }).then((d) => console.log(d))
          .catch((d) => console.log(d));
    }

}

//patching todos
export function patchTodos(formValues) {
   // console.log( formValues.isCompleted )
    return function(dispatch) {
        return fetch(`http://localhost:3000/Todos/${formValues.id}`, {
            method: 'PATCH',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
        }).then((d) => dispatch(togglecompTodos(d._bodyText)))
          .catch((d) => console.log(d));  
    }

}
