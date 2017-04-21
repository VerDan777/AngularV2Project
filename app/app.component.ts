import {Component} from "@angular/core";
const todos= [
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
    },
];

@Component({
    moduleId:module.id,
    selector:'app',
    templateUrl:'app.component.html',
    styleUrls:['app.component.css']

})
export class AppComponent {
title1:string="str";
// title.


title="Angular 2 ";
todos =todos;
toogle(todo:any){
    console.log("toogle", todo);
}
delete(todo :any) {
    var index=this.todos.indexOf(todo);
    if (index >-1) {
        this.todos.splice(index,1);
    }
}
}