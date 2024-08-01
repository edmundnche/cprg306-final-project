'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    };
    return (
        <form
            className='flex justify-between px-5 py-3 max-w-6xl mx-auto bg-gray-800 border border-gray-700 rounded-md shadow-sm'
            onSubmit={handleSubmit}
        >
            <div className='relative w-full'>
                <input
                    type='text'
                    placeholder='Search keywords...'
                    className='w-full h-12 pl-10 pr-4 rounded-md placeholder-gray-500 outline-none bg-gray-900 border border-gray-700 flex-1 text-white focus:ring-2 focus:ring-amber-600'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' size={24} />
            </div>
            <button
                className='ml-3 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 disabled:bg-gray-400'
                disabled={search === ''}
            >
                Search
            </button>
        </form>
    );
}
