"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("________ New Task Added________");
        console.log("Task " + task + " inserted in the list");
        this.tasks.push(task);
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("START All items in Array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END All items in Array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("________Task Removed________");
            console.log("Task " + task + " removed in the list");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.listAllItems();
myTodos.deleteTask('sleep');
