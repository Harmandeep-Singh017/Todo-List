import { useState } from "react";

import {useDispatch} from 'react-redux';
import { addNewTodo } from "../redux/action";


const TodoForm = () => {
    const [text, setText] = useState("");
    const disptach = useDispatch();
    const onFormSubmit = (event) => {
        event.preventDefault();

        disptach(addNewTodo(text));
        setText('');
    }
    const onInputChange = (event) => {
        setText(event.target.value);
    }
    return (
        <form action="" className="form" onSubmit={onFormSubmit}>
            <input className="input" type="text" 
            placeholder="Enter new todo..."
            onChange={onInputChange}
            value= {text}/>
        </form>
    )
}

export default TodoForm;