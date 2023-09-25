import { Link } from '@inertiajs/react';
import StarBar from './StarBar';

export default function ProductCard({ product }) {
    return (
        <Link href={route('shop.show', { product: product })} className='border-2 border-black rounded-xl p-5'>
            <img 
                className='border-2 border-black w-full bg-gray-300' 
                src={product.image ? `http://localhost:8000/storage/${product.image}` : 'http://localhost:8000/images/gun_icon.png'}
                alt={product.name}/>
            <h3 className='font-bold text-lg mt-3'>{product.name}</h3>
            <StarBar stars={product.stars} />
            <h4 className='text-gray-500 mt-1'>{product.category.name}</h4>
            <h5 className='text-green-500'>${product.price}</h5>
        </Link>
    );
}
