import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface UseContextTestProps {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const UseContextTest = () => {
    return(
        <div>
            {/* <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/> */}
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default UseContextTest;