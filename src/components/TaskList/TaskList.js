import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Add from '../Add/Add';
import Task from "../Task/Task";
const TaskList = () => {
    const taskList = useSelector(state => state.taskReducer.tasks);
    const [etat, setEtat] = useState("")
    return (
        <div style={{ width: "50%", margin: "auto" }} >
            <Add />
            <Button variant="primary " onClick={() => {
                setEtat("")
            }}>All</Button>{' '}
            <Button variant="success" onClick={() => {
                setEtat(true)
            }} >Done</Button>{' '}
            <Button variant="warning" onClick={() => {
                setEtat(false)
            }}>Not Done</Button>{' '}
            {
                taskList.map((tache, index) => (tache.check === etat || etat === "") ? < Task key={index} tache={tache} /> : "")
            }
        </div>
    )
}

export default TaskList
