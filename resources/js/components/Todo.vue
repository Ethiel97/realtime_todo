<template>
 <li class="todo" :class="{ completed: todo.completed, editing: todo == editedTodo }">
     <div class="view">
         <input type="checkbox" v-model="todo.completed" class="toggle">
         <label @dblclick="editTodo(todo)">{{todo.title}}</label>
         <button @click="removeTodo(todo)" class="destroy"></button>
     </div>

    <input type="text" @keyup.esc="cancelEdit(todo)"  @blur="doneEdit(todo)"
 class="edit">
 </li>

</template>
<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      editedTodo: null,
      beforeEditCache: ""
    };
  },
  methods: {
    editTodo(todo) {
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
    },
    removeTodo(todo) {
      this.$store.state.toRemove = todo;
      this.$store.dispatch("DELETE_TODO", todo);
    }
  }
};
</script>
