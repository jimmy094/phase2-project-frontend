import React from 'react' 

class SearchTasks extends React.Component {
    render() {
        return(
            <div>
                <input
                    type="text"
                    placeholder="search a task">
                </input>
            </div>
        )
    }
}

export default SearchTasks