import React from 'react' 
import { Input } from 'semantic-ui-react'





const SearchTasks = props => {

    let handleChange = (e) => {
        props.changeSearchTerm(e.target.value)
      }
        
    
        return(
            <div>
                <Input
                    type="text"
                    placeholder="search a task"
                    value={props.searchTerm} 
                    onChange={handleChange}/>
                
            </div>
        )
}



export default SearchTasks;