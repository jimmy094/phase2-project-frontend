import React from 'react' 

class NewTaskForm extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input 
                    type="text" 
                    className= "name" 
                    placeholder="enter new task here">
                    </input><br/>
                    <input
                    type="text" 
                    className= "priority" 
                    placeholder="task priority">
                    </input><br/>
                </form>
            </div>
        )
    }
}

export default NewTaskForm