import React from 'react';
import { Card } from 'semantic-ui-react'

import Task from './Task'



const TaskList = (props) => {

        let arrayOfTasks = props.tasks.map((taskObj) => {
           return <Task key={taskObj.id} task={taskObj}/>
        })
    
    return (
            
        <Card.Group>
            
            {arrayOfTasks}
        
        </Card.Group>

            
    )
}


export default TaskList;