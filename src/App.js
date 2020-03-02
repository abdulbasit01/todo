import React, { Component } from 'react';
import Todo from "./component/todo"
import AddToDo from "./component/From"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo:[
        {id:1,content:"wake up"},
        {id:2,content:"go to the walk"},
        {id:3,content:"go to the office"}
      ]
     }
  }
  deleteItem=(id)=>{
    const todo =this.state.todo.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      todo
    })
  }
  AddToDo=(todo)=>{
    todo.id=Math.random()
    let todos=[...this.state.todo,todo]
    this.setState({todo:todos})
    
  }
  
  render() { 
    
    return ( 
      <React.Fragment>
        <div className="todo-app container">
          <h1 className="center blue-text">ToDos</h1>
          <Todo todos={this.state.todo} deleteItem={this.deleteItem} updateItem={this.updateItem} style={this.style}/>
          <AddToDo AddToDo={this.AddToDo}/>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;
