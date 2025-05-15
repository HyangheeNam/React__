import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ContentProps{
    isDark: boolean;
}

const Content = () => {

    const {isDark} = useContext(ThemeContext);
    
    return(
        <div 
            className="content"
            style={{
                backgroundColor: isDark ? "black": "white",
                color: isDark ? "white" : "black",
        }}>
            <h1>Gildong Have a nice day</h1>
        </div>
    )
}

export default Content;