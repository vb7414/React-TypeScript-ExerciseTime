import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//FC functional component, describes a type defined by the React package, is generic
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                //bcz React.FC, can add key prop here
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;
