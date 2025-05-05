import { useState, useEffect } from "react";
import Fuse from "fuse.js";

function SearchBar({data, onSearch}){
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const fuse = new Fuse(data, {keys:['title', 'links'], threshold:0.3})

    const handleChange = (e) => {
        const input = e.target.value;
        setValue(input);
        const results = input ? fuse.search(input).map(res => res.item.title) : [];
        setSuggestions(results.slice(0,5));
        onSearch(input);
    }

    return (
        <div className='relative p-4 bg-white dark:bg-gray-800 sticky top-0 z-10'>
            <input 
            type='text'
            placeholder='Search categories...'
            className='w-full border rounded px-4 py-2 text-sm bg-white dark:bg-gray-700'
            value={value}
            onChange={handleChange}/>
            {suggestions.length > 0 && (
                <ul className="absolute mt-1 bg-white dark:bg-gray-700 border rounded shadow w-full z-20">
                    {suggestions.map((s, index) => (
                        <li 
                        key={index}
                        className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer"
                        onClick={() => {
                            setValue(s);
                            onSearch(s);
                            setSuggestions([]);
                        }}>
                            {s}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBar;