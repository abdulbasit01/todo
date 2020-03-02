import React from 'react';
import "./style.css"

const Todos=({todos,deleteItem,updateItem,complete}) =>{
    
    const todoList=todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item center " key={todo.id}>
                    <i  onClick={()=>{deleteItem(todo.id)}} className="fas fa-trash-alt customDiv" ></i>
                    <br/>
                    <i className="fas fa-user-circle customDiv" onClick={()=>{complete(todo.id)}}></i>

                    <span style={{color:todo.color,textDecoration:todo.textDecoration}} > {todo.content} </span> 
                    <i className="fas fa-user-edit customDiv" onClick={()=>{updateItem(todo.id)}}></i>
                    
                </div>
            )
        })
    ) : (
        <div className="center">
            you donot have ant todos left
        </div>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;

