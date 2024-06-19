import {forwardRef} from "react";

const Input = forwardRef(function Input({isTextarea = false, label, type = 'text', ...props}, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm focus:outline-none focus:border-stone-600 border-stone-300 bg-stone-200 text-stone-600"
    return (
        <p className="flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">
                {label}
            </label>
            {
                isTextarea
                ? <textarea ref={ref} className={classes}/>
                : <input
                        {...props}
                        ref={ref}
                        className={classes}
                        type={type}
                    />
            }
        </p>
    )
});

export {Input}