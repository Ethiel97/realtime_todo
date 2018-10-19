<template>
    <!--<div>-->
    <!--<input class="toggle-all" type="checkbox" v-model="allDone">-->
    <ul class="todo-list">
        <todo v-for="todo in todos" :todo="todo" :key="todo.id"/>
    </ul>
    <!--</div>-->


</template>

<script>
    import todo from "../components/Todo";
    import {mapGetters} from "vuex";

    export default {
        components: {
            todo
        },
        name: "TodoList",
        data() {
            return {};
        },
        mounted() {
            this.$store.dispatch("GET_TODOS");
        },
        computed: {
            ...mapGetters(["todos", "remaining"]),
            allDone: {
                get: function () {
                    return this.remaining.length === 0;
                },
                set: function (value) {
                    this.todos.forEach(todo => {
                        todo.completed = true;
                    });
                }
            }
        }
    };
</script>
