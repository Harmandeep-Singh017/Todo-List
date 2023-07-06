import {toggleTodo} from "../redux/action/index"

import { useDispatch } from "react-redux"


const Todo = ({todo}) => {

    const dispatch = useDispatch();
    return (
        <li className="task" onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done? 'line-through': '',
                color: todo.done ? '#bdc3c7' : '#34495e',
                backgroundColor: todo.done ? '#00ff83': '',
            }}
        
        >
            <span style={{color: todo.done ? 'black': 'white'}}>{todo.data}</span>

            <span className="icon">
                <i className="fa fa-trash"/>
            </span>
            <span className="icon">
                <i className="fa fa-pen"/>
            </span>
        </li>
    )
}

export default Todo