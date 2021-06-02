import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Task extends Component {


  handleDelete = (e) => {
    fetch(`http://localhost:3000/toys/${this.props.task.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(emptyObj => {
        this.props.deleteTask(this.props.task.id)
      })
  }


render() {

    let {taskName, mockUp, priority, startDate, endDate} = this.props.task

    return (
    <div>
      <Card>
        <h2>{taskName}</h2>
        <h4 style={{color: "red"}}>Priority level: {priority}</h4>
        
        <img src={mockUp} alt={taskName}/>
        
        <p>{startDate}</p>
        <p>{endDate}</p>
        <Button basic color="orange" onClick={this.handleDelete}> Delete</Button>
      </Card>
    </div>   
            
    )

}
}

export default Task;