let tasks: string [] = [];

function addTask(task:string):number{

    tasks.push(task);
    console.log("________ New Task Added________")
    console.log("Task "+task+" inserted in the list");
    return tasks.length;
}

function listAllTasks(){
    console.log("START All items in Array")
    tasks.forEach(function(task){
        console.log(task);

    })
    console.log("END All items in Array")
}

function deleteTask(task:string){
    let index:number = tasks.indexOf(task);
    if(index> -1){
        tasks.splice(index,1);
        console.log("________Task Removed________")
        console.log("Task "+task+" removed in the list")

    }
    return tasks.length;
}

let x : number = addTask('Wake up');
console.log("Number of items in the list: "+x);
addTask('Sleep');
listAllTasks();
deleteTask('sleep');
