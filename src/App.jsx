import {Sidebar} from "./components/Sidebar.jsx";
import {NewProject} from "./components/NewProject.jsx";
import {NoProject} from "./components/NoProject.jsx";
import {SelectedProject} from "./components/SelectedProject.jsx";
import {useState} from "react";
import Swal from "sweetalert2";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    function handleStoreTask(taskData) {
        setProjectsState(prevState => {
            let id;
            // if there are no tasks, set id to 1
            if (prevState.tasks.length === 0) {
                id = 1;
            } else {
                // latest id from the tasks array
                id = prevState.tasks[prevState.tasks.length - 1].id + 1;
            }
            const newTask = {
                ...taskData,
                id: id,
                text: taskData.text,
                projectId: prevState.selectedProjectId
            }
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            }
        })
    }


    function handleDeleteTask(taskId) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== taskId)
            }
        })
    }

    function handleAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        })
    }

    function handleStoreProject(projectData) {
        setProjectsState(prevState => {
            let id;
            // if there are no projects, set id to 1
            if (prevState.projects.length === 0) {
                id = 1;
            } else {
                // latest id from the projects array
                id = prevState.projects[prevState.projects.length - 1].id + 1;
            }
            const newProject = {
                ...projectData,
                id: id,

            }
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleCancelProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            }
        })
    }

    function handleSelectProject(projectId) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: projectId
            }
        })
    }

    function handleDeleteProject(projectId) {
        Swal.fire({
            icon: 'success',
            title: "Project Deleted",
        });
        setProjectsState(prevState => {
            return {
                ...prevState,
                projects: prevState.projects.filter(project => project.id !== projectId),
                selectedProjectId: undefined
            }
        })
    }


    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    let content = <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onSaveTask={handleStoreTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
    />;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject onSave={handleStoreProject} onCancel={handleCancelProject}/>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProject onAddProject={handleAddProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar
                onAddProject={handleAddProject}
                onSelectedProject={handleSelectProject}
                projects={projectsState.projects}
                selectedProjectId={projectsState.selectedProjectId}
            />
            <div className="container mx-auto px-4">
                {content}
            </div>
        </main>
    );
}

export default App;
