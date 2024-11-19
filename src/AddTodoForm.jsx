import React from 'react';

function AddTodoForm(){
    return(
        <from>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="todoTitle" placeholder="Enter todo..."/>
            <button type ="submit">Add</button>
        </from>
    );

}

export default AddTodoForm