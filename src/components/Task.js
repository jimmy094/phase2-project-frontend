import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Task extends Component {


render() {

    let {taskName, image, priority, startDate, endDate} = this.props.task

    return (
    <div>
      <Card>
        <h2>{taskName}</h2>
        <h4 style={{color: "red"}}>Priority level: {priority}</h4>
        
        <img src={image} alt={this.props.taskName}/>
        
        <p>{startDate}</p>
        <p>{endDate}</p>
        <Button basic color="orange"> Delete</Button>
      </Card>
    </div>   
            
    )

}
}

export default Task;