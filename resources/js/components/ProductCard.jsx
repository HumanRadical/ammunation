import { Link } from '@inertiajs/react';
import StarBar from './StarBar';

export default function ProductCard({ product }) {
    return (
        <Link href={route('shop.show', { product: product })} className='border-2 border-black rounded-xl p-5 bg-gray-400 hover:bg-gray-500 transition text-black space-y-1'>
            <img 
                className='border-2 border-black w-full bg-gray-300' 
                src={product.image ? `/storage/${product.image}` : '/images/gun_icon.png'}
                alt={product.name}/>
            <h3 className='font-bold text-xl'>{product.name}</h3>
            { product.reviews.length ? <StarBar stars={product.stars} starBarKey={`product${product.id}`} /> : '' }
            <Link href={route('shop.index', { category: product.category.slug })}>
                <h4 className='text-white hover:underline'>{product.category.name}</h4>
            </Link>
            <h5 className='text-green-400'>${product.price.toFixed(2)}</h5>
        </Link>
    );
}
