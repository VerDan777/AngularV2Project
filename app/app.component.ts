    import {Component} from "@angular/core";
    
    class Todo {
      
        constructor(public title:string, public completed:boolean=false) {

        }
    }
    const todos:Todo[]= [
        {
            title:"Программа",
            completed:false
        },
        {
            title:"Программа1",
            completed:false 
        },
        {
            title:"Программа2",
                completed:false
        }
    
    ];
    
    @Component ({
        moduleId:module.id,
        selector:'app',
        templateUrl:'app.component.html',
        styleUrls:['app.component.css']
    
    })
    export class AppComponent {
   
    title="Angular 2 ";
    todos:Todo[] =todos;
    NewTodoTitle:string='';
    toogle(todo:any){
        console.log("toogle", todo);
    }
    delete(todo :any) {
        var index=this.todos.indexOf(todo);
        if (index >-1) {
            this.todos.splice(index,1);
        }
    }
    create() {
        
     
  let todo:Todo= new Todo(this.NewTodoTitle);   
  this.todos.push(todo);    
this.NewTodoTitle=''; 
    }     

}