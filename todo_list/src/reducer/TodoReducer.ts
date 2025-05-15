import React, {useReducer, useState} from "react";
import { Todo } from "../types/TodoType";

type ReducerAction =
    | {type: 'send'; content:string }
    | {type: 'delete'; id:number}
    | {type: 'complete'; id:number}

function TodoReducer( state:Todo[], action:ReducerAction ):Todo[] {
    switch(action.type) {
        case 'send':
            return [...state, { id:Date.now(), content:action.content, isComplete:false }];
        case 'delete':
            console.log("delete");
            return state.filter(todo => todo.id !== action.id);
        case 'complete':
            console.log("complete");
            return state.map( (index) => (index.id === action.id ? {...index, isComplete: !index.isComplete} : index ) );
        default:
            return state;
    }

        

    
}

export default TodoReducer;