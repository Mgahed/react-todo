import noProjectImage from '../assets/no-projects.png';
import {PrimaryButton} from "./mainComponents/PrimaryButton.jsx";

export function NoProject({onAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3 sm:w-full">
            <img src={noProjectImage} alt="No Project" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">
                Please select a project from the sidebar or create a new one.
            </p>
            <PrimaryButton text="Create New Project" onClick={onAddProject} />
        </div>
    )
}