import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function CartCard({ product }) {
    const [quantity, setQuantity] = useState(product.pivot.quantity)

    const incrementQuantity = () => {
        setQuantity(oldQuant => oldQuant + 1)
        router.patch(`/cart/${product.slug}`, { quantity: quantity + 1 })
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(oldQuant => oldQuant - 1)
            router.patch(`/cart/${product.slug}`, { quantity: quantity - 1 })
        }
    }

    return (
        <tr className='border-t-2 py-5 text-black grid grid-cols-6'>
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
                <button className='bg-gray-200 hover:bg-gray-300 w-20' onClick={decrementQuantity}>-</button>
                <input 
                    className='text-lg w-full h-full border-none arrow-none px-0 text-center' 
                    type="number" 
                    min='1'
                    step='1'
                    value={quantity} 
                    onChange={e => e.target.value > 0 && setQuantity(Math.round(e.target.value))} />
                <button className='bg-gray-200 hover:bg-gray-300 w-20' onClick={incrementQuantity}>+</button>
            </td>
            <td className='my-auto'>
                <h5 className='text-green-400 text-xl font-medium'>${(product.price * quantity).toFixed(2)}</h5>
            </td>
            <td className='my-auto'>
                <button 
                    className='text-lg text-blue-600 hover:underline cursor-pointer'
                    onClick={() => router.delete(`/cart/${product.slug}`)}
                >Remove</button>
            </td>
        </tr>
    )
}