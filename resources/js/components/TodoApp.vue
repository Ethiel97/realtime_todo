<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>

        </header>
        <new-todo></new-todo>
        <todo-list></todo-list>
    </section>
</template>
<script>
    import newTodo from "../components/NewTodo.vue";
    import todoList from "../components/TodoList.vue";
    import {mapGetters} from "vuex";

    export default {
        components: {
            newTodo,
            todoList
        },
        name: "TodoApp",
        data() {
            return {};
        },
        mounted() {

            window.Echo.channel("newTask").listen(".task-created", e => {
                this.$store.commit("ADD_TODO", e.task);
                this.newTodo.title = "";
            });

            window.Echo.channel("taskRemoved").listen(".task-removed", e => {
                this.$store.commit("DELETE_TODO", this.toRemove);
            });
        },
        computed: {
            ...mapGetters(["newTodo", "toRemove"])
        }
    };
</script>
<style>
</style>

