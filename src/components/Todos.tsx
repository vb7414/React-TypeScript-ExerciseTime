import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//FC functional component, describes a type defined by the React package, is generic
//Todop[]
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                //bcz React.FC, can add key prop here
                <TodoItem key={item.id} text={item.text} />
            ))}
            {/* <li>learn react</li>
            <li>learn typescript</li> */}
        </ul>
    );
};

export default Todos;
