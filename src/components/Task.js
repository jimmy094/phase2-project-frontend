import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Task extends Component {

  state={
    priority:"",
    startDate:"",
    endDate:""
  }


  handleDelete = (e) => {
    fetch(`http://localhost:3000/tasks/${this.props.task.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(emptyObj => {
        this.props.deleteTask(this.props.task.id)
      })
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })
}
  handleSubmit = (e) =>{
  fetch(`http://localhost:3000/tasks/${this.props.task.id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    priority:this.state.priority,
    startDate:this.state.startDate,
    endDate:this.state.endDate
  }),
})
  .then((r) => r.json())
  .then((updatedTask) => {
    this.props.updateTask(updatedTask)
  });

  }


render() {

    let {taskName, mockUp, priority, startDate, endDate} = this.props.task

    return (
    <div>
      <Card>
        <h2>{taskName}</h2>
        <h4 style={{color: "red"}}>Priority level: {priority}
        <select name="priority" 
              id="priority"
              className="select-priority"
              label="Priority"
              onChange={this.handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              </h4>

        
        {/* <img src={mockUp} alt={taskName}/> */}
        
        <p>{startDate}
        <input type="date" 
              id="start" 
              name="startDate"
              onChange={this.handleChange}
              min="2020-01-01" 
              max="2024-12-31">
              </input>
        </p>
        <p>{endDate}
        <input type="date" 
              id="end" 
              name="endDate"
              onChange={this.handleChange}
              min="2020-01-01" 
              max="2024-12-31">
              </input>
        </p>
        <Button basic color="orange" onClick={this.handleDelete}> Delete</Button>
        <Button onClick={this.handleSubmit}>Update</Button>
      </Card>
    </div>   
            
    )

}
}

export default Task;