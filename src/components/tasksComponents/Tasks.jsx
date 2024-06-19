import {NewTasks} from "./NewTasks.jsx";

export function Tasks({tasks, onSaveTask, onDeleteTask}) {
    return (
        <>
            <h2 className="text-2xl font-bold text-stone-600 mb-4">Tasks</h2>
            <p className="text-stone-400 mb-4">You have {tasks.length} tasks</p>
            <NewTasks
                onSaveTask={onSaveTask}
                onDeleteTask={onDeleteTask}
            />
            <ul className="space-y-2">
                {tasks.map((task) => {
                    return (
                        <li key={task.id}
                            className="flex items-center rounded justify-between p-2 my-4 bg-stone-300 text-stone-500">
                            <input type="checkbox" id={task.id} name={task.text} className="mr-2"/>
                            <label htmlFor={task.id} className="text-stone-600">{task.text}</label>
                            <button
                                className="text-stone-500 hover:text-red-500"
                                onClick={() => onDeleteTask(task.id)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}