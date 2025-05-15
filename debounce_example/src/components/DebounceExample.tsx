import React, { useState,useEffect } from "react";

function fetchDataFromServer(searchInput:string){

    const users = [
        { name: "김철수", age: "16" },
        { name: "이영희", age: "26" },
        { name: "김민수", age: "15" },
        { name: "홍길동", age: "20" },
        { name: "홍민영", age: "45" },
        { name: "김민영", age: "32" },
    ]

    return users.filter((searchName) => searchName.name.startsWith(searchInput));
};

interface userType{
    name: string;
    age: string;
}

const DebounceExample = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState<userType[]>([]);
    const [debouncedInput, setDebouncedInput] = useState('');
    
    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedInput(input);
        },1000);
    });


    useEffect(() => {
        const users = fetchDataFromServer(debouncedInput);
        setResult(users);
        
    },[debouncedInput]);


    return(
        <div>
            <div>
                <input 
                    type="text"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
            </div>
            <div>
                <ul>
                    {result.map((names)=>(
                        <li>
                            {names.name}
                            {names.age}
                        </li>
                    ))}

                    
                </ul>
            </div>
            
        </div>
    )
}

export default DebounceExample;