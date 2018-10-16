let getters = {
    newTodo: state => {
        return state.newTodo
    },
    todos: state => {
        return state.todos
    },
    toRemove: state => {
        return state.toRemove
    },
    completed: state => {
        return state.todos.filter(todo => todo.completed === 1)
    },
    remaining: state => {
        return state.todos.filter(todo => todo.completed === 0)
    }
}

export default getters