import { useState } from 'react'

export default function SearchInput({onSearch}) {

    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearch = (e) => {
        const text = e.target.value;
        setSearchText(text);
        onSearch(text);
    }

    return(
        <form className="flex items-center w-11/12 rounded-3xl bg-red-500 px-3 max-w-3xl" onSubmit={handleSubmit}>
            <input 
            type="text" 
            onChange={handleSearch}
            className="flex-1 px-1 py-4 outline-none text-white focus:outline-none bg-transparent placeholder-white text-2xl font-medium"
            placeholder="Buscar..." />
            <button className="rounded-full bg-white w-9 h-9 cursor-pointer" type="submit">
            <svg className="w-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
            </button>
        </form>
    ) 
}