import React, { useEffect, useReducer, useState } from 'react'
import TodoReducer from '../reducer/TodoReducer';
import { Todo } from '../types/TodoType';

function TodoList( ) {

    const [text, setText] = useState('');
    // useReducer[state:getter, dispatch:setter]
    // dispatch: ex)setText에 비해 방대한 양의 데이터 전달에 용이
    // [state:getter, dispatch:setter] = useReducer(함수전달(必), [초기값(必)], [초기함수（选）])
    const [state, dispatch] = useReducer(TodoReducer, [], ()=>{
        //localStorage에 "todos"라는 이름의 저장 된 데이터 찾기
        // "todos"라는 이름의 저장된 데이터가 있으면 JSON으로 전달
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState< "all" | "complete" | "inComplete" >("all");


    //localStorage = "todos"라는 이름의 공간을 state를 string 형태로 json에 저장
    //[state]: state가 바뀔 때 마다 (데이터 새로 등록) 저장된 값을 string 형태로 todos에 저장
    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state])

    //('받아올 내용 선언' -- 새로운 내용에 대한 변수 산안)
    const sendBtn = (txt:string) => {
        dispatch({type: 'send', content:txt})
    }

    const filterTodo = state.filter( todo => {
        if (filter === "complete") return todo.isComplete;
        if (filter === "inComplete") return !todo.isComplete;
        return true;
    } )

    return (
        <div>
            <h1>To-do List</h1>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}  />
            <button onClick={() => sendBtn(text)} >Send</button>
            
            <select onChange={(e) => setFilter(e.target.value as "all" | "complete" | "inComplete")}>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="inComplete" >InComplete</option>
            </select>


            <ul >
                {filterTodo.map((list) => (
                    <li key={list.id}>
                        <input type="checkbox" checked={list.isComplete} onChange={() => dispatch({type: 'complete', id:list.id})} />
                        {list.content}
                        <button onClick={() => dispatch({type: 'delete', id:list.id})}>Delete</button>
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default TodoList