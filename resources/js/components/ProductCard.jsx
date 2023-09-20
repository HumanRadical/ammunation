import { Link } from '@inertiajs/react';

export default function ProductCard({ product }) {
    return (
        <Link href={route('shop.show', { product: product })} className='border-2 border-black rounded-xl p-5'>
            <img className='border-2 border-black p-3 w-full bg-gray-300' src='http://localhost:8000/images/gun_icon.png' alt='Gun'/>
            <h3 className='font-bold text-lg mt-3'>{product.name}</h3>
            <h4 className='text-gray-500'>{product.category.name}</h4>
            <h5 className='text-green-500'>${product.price}</h5>
        </Link>
    );
}
