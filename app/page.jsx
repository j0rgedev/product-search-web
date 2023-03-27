'use client'

import SearchInput from '../components/SearchInput'
import Products from '../components/Products'
import { useState } from 'react'

export default function Home() {

    const [searchText, setSearchText] = useState('');

    const handleSearch = text => {
        setSearchText(text);
        console.log(searchText);
    }

    return (
        <div className='flex flex-col h-screen py-10 px-4 '>
            <main className='flex flex-col gap-y-9 flex-grow items-center'>
                <h1 className='text-5xl text-center'>BÚSQUEDA DE PRODUCTOS</h1>
                <SearchInput onSearch={handleSearch}/>
                <Products searchText={searchText}/>
            </main>
            <footer>
                <div className='w-100 flex justify-end'>
                    <img src={'/sgquimicos_logo.png'} alt="logo" />
                </div>
            </footer>
        </div>
    )
}

