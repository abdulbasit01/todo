import React, { Component } from 'react';
import Todo from "./component/todo"
import AddToDo from "./component/From"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo:[
        {id:1,content:"wake up",color:"grey",textDecoration:""},
        {id:2,content:"go to the walk" ,color:"grey",textDecoration:""},
        {id:3,content:"go to the office" ,color:"grey",textDecoration:""}
      ],
      
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
  updateItem=(id)=>{
    // console.log(id)
    let value=prompt("enter task you want to change")
    const todo =this.state.todo.filter(todo=>{
      return todo.id === id
    })
    this.state.todo.forEach(Element=> Element.id===id ? Element.content=value : null)
    // console.log(this.state)
    this.setState({
      todo:this.state.todo
    })
  }
  completed=(id)=>{
    
    const todo =this.state.todo.filter(todo=>{
      return todo.id === id
    })
    this.state.todo.forEach(Element=> Element.id===id ? (Element.color="red", Element.textDecoration="line-through") : null)
    // console.log(this.state)
    this.setState({
      todo:this.state.todo
    })
    

  }
  
  render() { 
    
    return ( 
      <React.Fragment>
        <div className="todo-app container">
          <h1 className="center blue-text">ToDos</h1>
          <Todo todos={this.state.todo} deleteItem={this.deleteItem} updateItem={this.updateItem} complete={this.completed}/ >
          <AddToDo AddToDo={this.AddToDo}/>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;
