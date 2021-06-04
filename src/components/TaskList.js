import React from 'react' 
import { Card, Icon, Image } from 'semantic-ui-react'

import Task from './Task'

//class TaskList extends React.Component {
const TaskList = (props) => {


    
     let arrayOfTasks = props.tasks.map((taskObj) => {
        return <Task key={taskObj.id} task={taskObj} deleteTask={props.deleteTask} updateTask={props.updateTask}/>
    })
    
    return (
      <Card.Group itemsPerRow={3}>
          {arrayOfTasks}
      </Card.Group>
    )
}

export default TaskList