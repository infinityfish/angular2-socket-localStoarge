import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
declare const io; // see here: https://github.com/AngularClass/angular2-webpack-starter/issues/221


@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {


  todos;
  text;
  editing = false;
  oldText;
  // constructor(private _todoService: TodoService) {}
  
      constructor(private _todoService: TodoService){
  
    }

  ngOnInit() {
    this.todos = this._todoService.getTodos();

    // this.todos = [
    //   { text: "pick up kids"},
    //   { text: "Meeting with boss"},
    //   { text: "Dinner with wife"}
    // ]
  }
  addTodo(){
    var newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);
    this.text = '';
    this._todoService.addTodo(newTodo);

  }
  
  deleteTodo(todoText){
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);       
      }     
    }
    
    this._todoService.deleteTodo(todoText);
  }
  
  editTodo(todo){
    this.editing = true;
    console.log("editing: ... " + this.editing);
    this.oldText = todo.text;
    this.text = todo.text;
  }
  updateTodo(){
    // console.log(this.text); // should show the new text
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;       
      }     
    }
    this._todoService.updateTodo(this.oldText, this.text); 
    this.editing = false;   
  }

}
