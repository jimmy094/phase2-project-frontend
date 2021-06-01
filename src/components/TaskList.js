import React from 'react' 
import { Card, Icon, Image } from 'semantic-ui-react'

import Task from './Task'

//class TaskList extends React.Component {
const TaskList = (props) => {


    
     let arrayOfTasks = props.tasks.map((taskObj) => {
        return <Task key={taskObj.id} task={taskObj}/>
    })
    
    return (
        <Card>
            <h2>Task list</h2>
            <Card.Content>
            {arrayOfTasks}
            </Card.Content>

            
        </Card>
    )
}

export default TaskList