import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
    return (
        <div className='group cursor-pointer hover:shadow-2xl shadow-lg rounded-md border border-gray-700 m-4 bg-gray-800 transition-shadow duration-300'>
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    alt={result.title || 'Movie Poster'}
                    width={500}
                    height={300}
                    className='rounded-t-md'
                />
                <div className='p-2'>
                    <p className='truncate text-lg font-bold'>{result.title || 'No Title'}</p>
                    <p className='truncate text-sm'>{result.overview || 'No Overview'}</p>
                    <p className='flex items-center'>
                        <FiThumbsUp className='h-5 mr-1' /> {result.vote_count || 0}
                    </p>
                </div>
            </Link>
        </div>
    );
}
