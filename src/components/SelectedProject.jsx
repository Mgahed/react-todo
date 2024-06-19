import {Tasks} from "./tasksComponents/Tasks.jsx";

export function SelectedProject({project, tasks, onDelete, onSaveTask, onDeleteTask}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="max-w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button
                        className="text-stone-400 hover:text-stone-900 dark:text-stone-350 dark:hover:text-stone-100"
                        onClick={() => onDelete(project.id)}
                    >
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks
                tasks={tasks ?? []}
                onSaveTask={onSaveTask}
                onDeleteTask={onDeleteTask}
            />
        </div>
    )
}