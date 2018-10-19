let mutations = {
    ADD_TODO(state, todo) {
        state.todos.unshift(todo)
    },

    CACHE_REMOVED(state, todo) {
        state.toRemove = todo;
    },

    GET_TODOS(state, todos) {
        state.todos = todos
    },

    DELETE_TODO(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
        state.toRemove = null;
    }
}

export default mutations