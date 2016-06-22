import { Injectable } from '@angular/core';
import { Init } from './todo.init';

@Injectable()
export class TodoService extends Init {


  constructor() {
    super(); // added when you use extends Init class
    console.log('TodoService Started ..');
    this.load();
  }
  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  
  addTodo(newTodo){
     var todos = JSON.parse(localStorage.getItem('todos'));
     todos.push(newTodo);
     //set newTodo
     localStorage.setItem('todos', JSON.stringify(todos));

  }
  
  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);       
      }     
    } 
    //set new TodoList
    localStorage.setItem('todos', JSON.stringify(todos));   
  }
  updateTodo(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
        todos[i].text = newText;       
      }     
    } 
    //set new TodoList
    localStorage.setItem('todos', JSON.stringify(todos));   
  }
}
