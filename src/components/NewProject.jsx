import {Input} from "./mainComponents/Input.jsx";
import {useRef} from "react";
import Swal from "sweetalert2";

export function NewProject({onCancel, onSave}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        // validateInputs
        let validation = validateInput(enteredTitle, enteredDescription, enteredDueDate);
        if (validation !== true) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: validation,
            });
            return;
        }
        // save data
        onSave({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    function validateInput(title, description, dueDate) {
        if (title.trim().length === 0) {
            return "Title is required";
        }
        if (description.trim().length === 0) {
            return "Description is required";
        }
        if (dueDate.trim().length === 0) {
            return "Due Date is required";
        }
        // validate due date is date and not in the past
        const today = new Date().toISOString().split('T')[0];
        if (dueDate < today) {
            return "Due Date cannot be in the past";
        }
        return true;
    }

    return (
        <div className="max-w-[35rem] mt-60">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button
                        className="text-stone-800 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-100"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input
                    ref={title}
                    label="Title"
                    isTextarea={false}
                    type="text"
                />
                <Input
                    ref={description}
                    label="Description"
                    isTextarea={true}
                />
                <Input
                    // set min date to tomorrow
                    min={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    ref={dueDate}
                    label="Due Date"
                    isTextarea={false}
                    type="date"
                />
            </div>
        </div>
    )
}