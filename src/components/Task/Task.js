import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { editTask } from "./../../redux/action/action";
import "./Task.css";
const Task = ({ tache }) => {
    const [editedTask, setEditedTask] = useState(tache.check);

    const dispatch = useDispatch();
    const edit = () => {
        setEditedTask(!editedTask)
        dispatch(editTask(tache.id, editedTask))
    }

    return (
        <div>
            <Alert variant={(editedTask) ? "warning" : "success"} onClick={() => edit()} className="alert" >
                {tache.task}
            </Alert>
        </div >
    )
}

export default Task
