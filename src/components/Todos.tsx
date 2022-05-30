import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//FC functional component, describes a type defined by the React package, is generic
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
    props
) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                //bcz React.FC, can add key prop here
                <TodoItem
                    key={item.id}
                    text={item.text}
                    //bind allows to pre-configure a function for future execution
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
