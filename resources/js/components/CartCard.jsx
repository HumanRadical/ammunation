import { Link } from '@inertiajs/react';

export default function CartCard({ product }) {
    return (
        <div className='border border-black rounded-xl p-5 bg-gray-400 text-black w-full grid grid-cols-7'>
            <img 
                className='border-2 border-black bg-gray-300 h-24' 
                src={product.image ? `/storage/${product.image}` : '/images/gun_icon.png'}
                alt={product.name}/>
            <Link className='my-auto col-span-2' href={route('shop.show', { product: product })}>
                <h3 className='text-2xl font-bold'>{product.name}</h3>
            </Link>
            <Link className='my-auto' href={route('shop.index', { category: product.category.slug })}>
                <h4 className='text-white text-xl hover:underline'>{product.category.name}</h4>
            </Link>
            <h5 className='text-green-400 text-xl my-auto'>${product.price}</h5>
            <label className='flex gap-2 my-auto'>
                Quantity:
                <input className='h-6 w-12' type="number" value={1} />
            </label>
            <h5 className='justify-self-end my-auto text-blue-600 hover:underline cursor-pointer'>Remove</h5>
        </div>
    )
}