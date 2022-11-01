import { useEffect, useState } from "react";
import { Todo } from "../../../Models/Todo";
import notify from "../../../Services/Nofifications";
import { getAllTasks } from "../../../Services/TodoApi";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(): JSX.Element {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getAllTasks()
            .then(res=>{
                setTodos(res.data);
                notify.success('Woho');
            })
            .catch(err => notify.error(err));
    }, []);
    return (
        <div className="TodoList flex-list">
            {todos.map(todo=><TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} group={todo.group} when={todo.when}/>)}
        </div>
    );
}

export default TodoList;
