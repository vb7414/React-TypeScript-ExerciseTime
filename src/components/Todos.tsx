import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//FC functional component, describes a type defined by the React package, is generic
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                //bcz React.FC, can add key prop here
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;
