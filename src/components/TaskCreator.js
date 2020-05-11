import React, { useState } from 'react';

export const TaskCreator = props => {
    const [newTaskName, setNewTaskName] = useState('');
    const updateNewTaksValue = e => setNewTaskName(e.target.value);
    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('');
    }

    return (
        <div className="my-1">
            <input className="form-control" value={newTaskName} onChange={updateNewTaksValue} type="text" />
            <button className="btn btn-primary mt-1" onClick={createNewTask}>add</button>
        </div>
    )
}