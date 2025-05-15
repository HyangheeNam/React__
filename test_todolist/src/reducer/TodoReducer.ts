import React from 'react'
import { Todo } from '../types/TodoTypes';

type ReducerAction =
    | {type:'send'; contents:string}
    | {type:'delete'; id:number}
    | {type:'complete'; id:number}

function TodoReducer(state:Todo[], action:ReducerAction):Todo[] {
    switch(action.type){
        case 'send':
            return [...state, {id:Date.now(), contents:action.contents, isComplete:false}];
        case 'delete':
            return state.filter( todo => todo.id !== action.id );
        case 'complete':
            return state.map( (index) => ( index.id === action.id ? {...index, isComplete: !index.isComplete}:index ) );
    }
}

export default TodoReducer;