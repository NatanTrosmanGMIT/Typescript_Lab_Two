import { todoInterface } from './todointerface';

class Todo implements todoInterface{

    constructor(){}

    tasks: Array<string>=[];

    addTask(task:string):number{
        this.tasks.push(task);
        console.log("________ New Task Added________")
        console.log("Task "+task+" inserted in the list");
        this.tasks.push(task);
        return this.tasks.length;
    }
    listAllItems():void{
        console.log("START All items in Array")
        this.tasks.forEach(function(task){
            console.log(task);
    
        })
        console.log("END All items in Array")
    }

    deleteTask(task:string):number{
        let index:number =this.tasks.indexOf(task);
        if(index> -1){
            this.tasks.splice(index,1);
            console.log("________Task Removed________")
            console.log("Task "+task+" removed in the list")
    
        }
        return this.tasks.length;
    }
}

let myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.listAllItems();
myTodos.deleteTask('sleep');