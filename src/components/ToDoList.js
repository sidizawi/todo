import React from "react";
import ToDo from "./ToDo"
const ToDoList = ({ tasks, match, onToggleCompleted }) => {
    let filtredTasks
    switch (match.params.filter) {
        case 'completed':
            filtredTasks = tasks.filter((task) => task.completed);
            break;
    
        default:
            filtredTasks = tasks;
            break;
    }
    if (filtredTasks.length === 0) {
        return (
            <>
				<h1 className="m-3">Liste de tâches</h1>
				<ul className="list-group m-3">
					<li className="list-group-item">Aucune tâche à afficher</li>
				</ul>
			</>
        )
    }
    return (
        <>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
            {
                filtredTasks.map((task) => < ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)
            }
        </ul>
    </>
    )
}

export default ToDoList;
