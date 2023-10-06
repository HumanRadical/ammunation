import MainLayout from '@/Layouts/MainLayout';
import CartCard from '@/components/CartCard';
import { useEffect, useState } from 'react';

export default function Cart({ auth, products }) {
    const [subtotal, setSubtotal] = useState(products.reduce((total, product) => total + product.price * product.pivot.quantity, 0))

    useEffect(() => {
        setSubtotal(
            products.reduce((total, product) => total + product.price * product.pivot.quantity, 0)
        )
    }, [products])

    return (
        <MainLayout auth={auth} head='Cart'>
            <div className='py-10 flex justify-center mx-auto'>
                <section className='rounded-lg border-2 border-black py-8 px-12 space-y-6 bg-gray-400 w-1/2 h-fit'>
                    {
                        products.length
                        ? <table className='px-4 w-full'>
                            <th className='uppercase grid grid-cols-6 text-left'>
                                <td>Product</td>
                                <td></td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Total</td>
                                <td>Options</td>
                            </th>
                            <tbody>
                                {
                                    products.map(product => {
                                        return <CartCard product={product} key={`cartitem${product.id}`} />
                                    })
                                }
                            </tbody>
                        </table>
                        : <p className='px-20 text-2xl'>Nothing in your cart.</p>
                    }
                    
                </section>
                <section className='rounded-lg border-2 border-black p-8 space-y-8 bg-gray-400 h-fit'>
                    <h2 className='text-4xl font-bold'>Totals</h2>
                    <div className='space-y-2'>
                        <h3 className='text-xl flex justify-between'>Subtotal: <span className='text-green-400'>${subtotal.toFixed(2)}</span></h3>
                        <h3 className='text-xl border-y-2 py-2 flex justify-between'>Tax: <span className='text-green-400'>${(subtotal * 0.13).toFixed(2)}</span></h3>
                        <h3 className='font-bold text-2xl flex justify-between'>Total: <span className='text-green-400'>${(subtotal * 1.13).toFixed(2)}</span></h3>
                    </div>
                    <button 
                        className='bg-orange-500 hover:bg-orange-600 transition text-2xl mt-3 px-4 py-2 rounded-lg'
                    >Proceed to checkout &rarr;</button>
                </section>
            </div>
        </MainLayout>
    )
}