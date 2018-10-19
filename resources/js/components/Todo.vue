<template>
    <li class="todo" :class="{ completed: todo.completed }">
        <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label>{{todo.title}}</label>
            <button @click="removeTodo(todo)" class="destroy"></button>
        </div>

        <!--<input type="text" @keyup.esc="cancelEdit(todo)" @blur="doneEdit(todo)"
               class="edit">-->
    </li>

</template>
<script>
    export default {
        name: "Todo",
        props: ["todo"],
        data() {
            return {
                // editedTodo: null,
                // beforeEditCache: ""
            };
        },
        computed: {
            completed() {
                return this.todo.completed === 1;
            }
        },
        methods: {
            /*   editTodo(todo) {
                   this.beforeEditCache = todo.title;
                   this.editedTodo = todo;
               },
               doneEdit(todo) {
                   if (!this.editedTodo) {
                       return;
                   }
                   this.editedTodo = null;
                   todo.title = todo.title.trim();
                   if (!todo.title) {
                       this.removeTodo(todo);
                   }
               },
               cancelEdit(todo) {
                   this.editedTodo = null;
                   todo.title = this.beforeEditCache;
               },*/
            removeTodo(todo) {
                this.$store.commit("CACHE_REMOVED", todo);
                this.$store.dispatch("DELETE_TODO", todo);
            }
        }
    };
</script>
