import {PrimaryButton} from "../mainComponents/PrimaryButton.jsx";
import {useState} from "react";
import Swal from "sweetalert2";

export function NewTasks({onSaveTask, onDeleteTask}) {
    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleClick() {
        if (enteredTask.trim().length > 0) {
            onSaveTask({
                text: enteredTask
            });
            setEnteredTask('');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Task title cannot be empty',
            })
        }
    }
    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                placeholder="Task Title"
                onChange={handleChange}
                value={enteredTask}
                className="w-2/3 p-1 border-b-2 rounded-sm focus:outline-none focus:border-stone-600 border-stone-300 bg-stone-200 text-stone-600"/>
            <PrimaryButton text="Add Task" onClick={handleClick}/>
        </div>
    )
}