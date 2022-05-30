import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todo-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    //監聽onClick: React.MouseEvent
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        //? was added automatically by IDE
        //可以改成!，告訴typeScript絕對會有值，不會是null
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
