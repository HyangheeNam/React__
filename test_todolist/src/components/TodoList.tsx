import React, { useEffect, useReducer, useState } from 'react'
import { Todo } from '../types/TodoTypes';
import TodoReducer from '../reducer/TodoReducer';

function TodoList() {
    const [text, setText] = useState('');
    const [filter, setFilter] = useState<"all" | "complete" | "inComplete">('all');

    const [state, dispatch] = useReducer(TodoReducer, [], ()=> {
        const saved =  localStorage.getItem("todos");
            return saved ? JSON.parse(saved) : [];
    });


    useEffect (() => {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);

    const sendBtn = (txt: string) => {
        dispatch({type:'send', contents:txt});
        
    }


    const FilterTodo = state.filter( todo => {
        if(filter === "complete") return todo.isComplete;
        if(filter === "inComplete") return !todo.isComplete;
        return true;
    })




    return (
        <div>

            <h1>Todo List</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}  />
            <button onClick={ () => sendBtn(text)}>Send</button>
            <select onChange={(e) => setFilter(e.target.value as "all" | "complete" | "inComplete")}>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="inComplete">InComplete</option>
            </select>

            <ul>
                {FilterTodo.map( (list) => (
                    <li key={list.id}>
                        <input type="checkbox" checked={list.isComplete} onChange={() => dispatch({type: 'complete', id:list.id})} />
                        {list.contents}
                        <button onClick={() => dispatch({type:'delete', id:list.id})}>Delete</button>
                    </li>
                ) )}
                
            </ul>


        </div>
    )
}

export default TodoList;