/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('todo', require('./components/Todo'))
Vue.component('new-todo', require('./components/NewTodo.vue'))
Vue.component('todo-list', require('./components/TodoList'))
Vue.component('todo-app', require('./components/TodoApp'))

import store from '../js/store'

const app = new Vue({
    el: '#app',
    store

});