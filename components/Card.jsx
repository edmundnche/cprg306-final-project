import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
    return (
        <div className='group cursor-pointer hover:shadow-2xl shadow-lg rounded-md border border-gray-700 m-4 bg-gray-800 transition-shadow duration-300'>
            <Link href={`/movie/${result.id}`}>
                {result.backdrop_path || result.poster_path ? (
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                        width={500}
                        height={300}
                        className='rounded-t-md group-hover:opacity-85 transition-opacity duration-300'
                        alt={`${result.title || result.name} poster`}
                    />
                ) : (
                    <div style={{ width: 500, height: 300, backgroundColor: '#555' }} className='rounded-t-md'></div>
                )}
                <div className='p-5'>
                    <p className='line-clamp-3 text-base text-gray-200 font-medium leading-tight'>{result.overview}</p>
                    <h2 className='text-xl font-semibold text-yellow-400 truncate mt-3'>
                        {result.title || result.name}
                    </h2>
                    <p className='flex items-center text-sm text-gray-400 mt-2'>
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className='h-5 w-5 mr-1 ml-3 text-red-400' />
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    );
}
