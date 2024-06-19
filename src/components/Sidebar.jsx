import {PrimaryButton} from "./mainComponents/PrimaryButton.jsx";

export function Sidebar({
                            onAddProject,
                            projects,
                            onSelectedProject,
                            selectedProjectId
                        }) {
    return (
        <>
            <aside
                id="sidebar"
                className="px-8 py-16 bg-stone-900 text-stone-50 dark:bg-stone-300 dark:text-stone-900 md:w-72 w-full rounded-r-xl hidden md:block">
                <div className="flex">
                {/*<span>
                    <i className="fa-solid fa-x" onClick={
                        () => {
                            let sidebar = document.getElementById('sidebar');
                            sidebar.classList.toggle('hidden');
                        }
                    }></i>
                </span>*/}
                    <h2 className="mx-2 mb-8 font-bold uppercase md:text-xl">Projects</h2>
                </div>
                <div>
                    <PrimaryButton text="+ Add Project" onClick={onAddProject}/>
                </div>
                <nav className="mt-5">
                    <ul>
                        {projects.map((project) => {
                            let cssClasses = "w-full text-left p-2 rounded hover:bg-stone-800 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-900";
                            if (project.id === selectedProjectId) {
                                cssClasses += " bg-stone-800 text-stone-200 dark:bg-stone-100 dark:text-stone-900";
                            } else {
                                cssClasses += " bg-stone-700 text-stone-100 dark:bg-stone-200 dark:text-stone-900";
                            }
                            return (
                                <li key={project.id} className="py-2">
                                    <button
                                        onClick={() => onSelectedProject(project.id)}
                                        className={cssClasses}
                                    >
                                        {project.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
            <button className="relative top-2 w-12 h-12 block md:hidden" onClick={
                () => {
                    let sidebar = document.getElementById('sidebar');
                    sidebar.classList.toggle('hidden');
                }
            }>
                <i className="fa-solid fa-bars"></i>
            </button>
            <button
                className="fixed bottom-4 right-4 p-2 rounded-full bg-stone-800 text-stone-50 dark:bg-stone-200 dark:text-stone-900 w-12"
                onClick={
                    () => {
                        let theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                        if (theme === 'dark') {
                            localStorage.setItem('theme', 'light');
                            document.documentElement.classList.remove('dark');
                        } else {
                            localStorage.setItem('theme', 'dark');
                            document.documentElement.classList.add('dark');
                        }
                    }
                }>
                <i className="fa-solid fa-circle-half-stroke"></i>
            </button>
        </>
    )
}