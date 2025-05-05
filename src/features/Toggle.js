import { useEffect, useState } from "react";

function Toggle() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if(darkMode){
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else{
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}
        className="border rounded px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-white">
            {darkMode ? ' ☀️' : '🌙'}
        </button>
    )
}

export default Toggle;