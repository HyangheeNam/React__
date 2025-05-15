import React, { useState } from "react";

interface UserInfoProps {
    login: (username: string) => void;
}

const UserInfo = ({ login }:UserInfoProps) => {

    const [username, setUsername] = useState('');

    const LogInBtn = () => {

        console.log(username);

        login(username);  
    }

    return(
        <div>
            <input 
                type="text" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <button onClick={LogInBtn}>LogIn</button>
        </div>
    )
}

export default UserInfo;