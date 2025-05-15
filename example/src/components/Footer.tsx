import React, {useContext, useState} from "react";
import { ThemeContext } from "../context/ThemeContext";

interface FooterProps {
    isDark : boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return(
        <div
            className="footer"
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
            }}>

            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>

        </div>
    )
}

export default Footer;