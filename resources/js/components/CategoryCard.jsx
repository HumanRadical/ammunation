import { router } from '@inertiajs/react';

export default function CategoryCard({ category }) {
    return (
        <button onClick={() => router.get('/shop', { 'category': category.slug })} className='border-4 border-black rounded-xl m-3 flex content-center'>
            <img className='border-2 border-black m-5 w-32 bg-gray-300' src='http://localhost:8000/images/gun_icon.png' alt='Gun'/>
            <div className='m-auto flex'>
                <h3 className='text-3xl my-auto font-bold'>{category.name}</h3>
                <img className='w-5 ml-2' src="http://localhost:8000/images/chevron-right.svg" alt="" />
            </div>
        </button>
    );
}
