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
import { mapGetters } from "vuex";
export default {
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
        // console.log(e.task)
        this.$store.state.toRemove = e.task;
        console.log(this.toRemove)
      this.$store.commit("DELETE_TODO", this.toRemove);
    });
  },
  computed: {
    ...mapGetters(["newTodo", "toRemove"])
  }
};
</script>
 <style>
.todoapp h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>

