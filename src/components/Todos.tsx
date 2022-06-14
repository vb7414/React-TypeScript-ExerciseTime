import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todo-context";

import classes from "./Todos.module.css";

const Todos = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    //bind allows to pre-configure a function for future execution
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
