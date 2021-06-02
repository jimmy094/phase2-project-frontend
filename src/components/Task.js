import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Task extends Component {

    handleDelete = (e) => {
        fetch(`http://localhost:3000/tasks/${this.props.tasks.id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(emptyObj => {
            this.props.deleteTask(this.props.tasks.id)
          })
      }


render() {

    let {taskName, image, priority, startDate, endDate} = this.props.task

    return (
    <div>
      <Card>
          
        
        <h2>Task: {taskName}</h2>
        
        <h4 style={{color: "red"}}>Priority level: {priority}</h4>
        
        <img src={image} alt={this.props.taskName}/>
        
        
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
        <Button negative color="red" onClick={this.handleDelete}> Delete Task</Button>
      </Card>
    </div>   
            
    )

}
}

export default Task;