import { Link } from '@inertiajs/react';

export default function CategoryCard({ category }) {
    return (
        <Link 
            href={route('shop.index', {category: category.slug})} 
            className='border-2 border-black bg-gray-400 hover:bg-gray-500 transition text-black rounded-xl m-3 flex content-center'
        >
            <img className='border-2 border-black m-5 w-24 bg-gray-300' src='/images/gun_icon.png' alt='Gun'/>
            <div className='m-auto flex'>
                <h3 className='text-3xl my-auto font-bold'>{category.name}</h3>
                <img className='w-5 ml-2' src="/images/chevron_right.svg" alt="" />
            </div>
        </Link>
    );
}
