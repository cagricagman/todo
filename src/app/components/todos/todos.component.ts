import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[] | undefined

  inputTodo :string = ""

  constructor() { }

  ngOnInit(): void {
    this.todosGet()
  }

  todosGet(){
    this.todos = []
    return this.todos
  }

  todoDone(id : number){
    this.todos?.map((v,i) => {
      if(i == id) v.complated = !v.complated

      console.log(v);
      return v;
    })
  }

  todoDelete(id : number){
    this.todos = this.todos?.filter((v,i) => i !== id)
  }

  todoAdd(){

    if(this.inputTodo.length > 0){
      this.todos?.push({
        content : this.inputTodo,
        complated : false
      })
      this.inputTodo = ""
    }

    
  }

}
