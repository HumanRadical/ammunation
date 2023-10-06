import { Link } from '@inertiajs/react';

export default function CartCard({ product }) {
    return (
        <tr className='border-t-2 py-5 text-black grid grid-cols-6 gap-2'>
            <td className='flex gap-3'>
                <Link href={route('shop.show', { product: product })}>
                    <img 
                        className='border-2 border-black bg-gray-300 h-28' 
                        src={product.image ? `/storage/${product.image}` : '/images/gun_icon.png'}
                        alt={product.name}/>
                </Link>
            </td>
            <td className='my-auto'>
                <Link href={route('shop.show', { product: product })}>
                    <h3 className='text-2xl font-bold hover:underline'>{product.name}</h3>
                </Link>
                <Link href={route('shop.index', { category: product.category.slug })}>
                    <h4 className='text-white text-xl hover:underline'>{product.category.name}</h4>
                </Link>
            </td>
            <td className='my-auto'>
                <h5 className='text-green-400 text-xl'>${product.price.toFixed(2)}</h5>
            </td>
            <td className='flex my-auto w-24 h-8'>
                <button className='bg-gray-200 w-36'>-</button>
                <input className='text-lg w-full h-full border-none arrow-none text-center' type="number" value={1} />
                <button className='bg-gray-200 w-36'>+</button>
            </td>
            <td className='my-auto'>
                <h5 className='text-green-400 text-xl font-medium'>${product.price.toFixed(2)}</h5>
            </td>
            <td className='my-auto'>
                <h5 className='text-lg text-blue-600 hover:underline cursor-pointer'>Remove</h5>
            </td>
        </tr>
    )
}