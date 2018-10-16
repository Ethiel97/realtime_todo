let actions = {
    DELETE_TODO({
        commit
    }, todo) {

        axios.delete(`/api/todos/${todo.id}`)
            .then(res => {
                if (res.data === 'deleted')
                // commit('SET_PRODUCTS', res.data)
                    console.log('deleted')

            }).catch(err => {
                console.log(err)
            })
    },
    ADD_TODO({
        commit
    }, todo) {
        axios.post('/api/todos', todo).then(res => {
            if (res.data === "added")
                console.log('ok')
        }).catch(err => {
            console.log(err)
        })
    },
    UPDATE_TODO({
        commit
    }, todo) {
        axios.put(`/api/todos/${todo.id}`, todo).then(res => {
            if (res.data === 'updated')
                console.log("updated")
        }).catch(err => console.log(err))

    },
    GET_TODOS({
        commit
    }) {
        axios.get('/api/todos')
            .then(res => {
                {
                    console.log(res.data)
                    commit('GET_TODOS', res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default actions