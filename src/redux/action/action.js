import { ADD_TASK, DELETE_TASK, EDIT_TASK, FITLER_TASK } from "../types";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload,
});

export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload,
});

export const editTask = (payload) => ({
    type: EDIT_TASK,
    payload,
});

export const filterTask = (payload) => ({
    type: FITLER_TASK,
    payload,
});
