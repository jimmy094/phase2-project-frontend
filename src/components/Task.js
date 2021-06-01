import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class Task extends Component {


render() {

    let {taskName, image, priority, startDate, endDate} = this.props.task

    return (
    <li>
      <div>
        <h2>{taskName}</h2>
        <h4 style={{color: "red"}}>Priority level: {priority}</h4>
        
        <img src={image} alt={this.props.taskName}/>
        
        <li>{startDate}</li>
        <li>{endDate}</li>
        <Button basic color="orange"> Delete</Button>
      </div>
    </li>   
            
    )

}
}

export default Task;