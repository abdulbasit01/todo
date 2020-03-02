import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content:""
         }
    }
    handleChange=(e)=>{
        console.log(this.state.content)
       return e.target.value.trim().length !==0 ? this.setState({
            content:e.target.value
        },console.log(e.target.value.trim().length)) : alert('') 
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.AddToDo(this.state)
        this.setState({content:""})
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Add more todo</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
         );
    }
}
 
export default AddToDo;