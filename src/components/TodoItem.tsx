import classes from "./TodoItem.module.css";

interface toDoItemProps {
    key: string;
    text: string;
    onRemoveTodo: () => void;
}

//React.FC is deprecation
// const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
//     props
// ) => {
//     return (
//         <li className={classes.item} onClick={props.onRemoveTodo}>
//             {props.text}
//         </li>
//     );
// };

const TodoItem = ({ key, text, onRemoveTodo }: toDoItemProps) => {
    return (
        <li key={key} className={classes.item} onClick={onRemoveTodo}>
            {text}
        </li>
    );
};

export default TodoItem;
