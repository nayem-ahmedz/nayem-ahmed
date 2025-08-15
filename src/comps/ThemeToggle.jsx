import { useState, useEffect } from "react";

function ThemeToggle() {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const root = document.documentElement;
        if(theme === 'dark'){
            root.classList.add('dark');
        } else{
            root.classList.remove('dark');
        }
    }, [theme]);
    const changeTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    }
    return (
        <button className='theme-toggler' onClick={changeTheme}>
            <i className="fa-solid fa-circle-half-stroke"></i>
        </button>
    );
}

export default ThemeToggle;