export class Init {
    load(){
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined ) {
          console.log("No Todos found .. ");
         var todos = [
            { text: "pick up kids"},
            { text: "Meeting with boss"},
            { text: "Dinner with wife"}
          ];
          localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            console.log("Found Todos");
        }
    }
    
}