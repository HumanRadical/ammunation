import MainLayout from '@/Layouts/MainLayout';
import ProductReview from '@/components/ProductReview';
import ReviewForm from '@/components/ReviewForm';
import StarBar from '@/components/StarBar';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ auth, cartCount, product }) {
    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)

    const addToCart = () => {
        router.post(`/cart/${product.slug}`, { quantity: quantity })
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 3000)
    }

    return (
        <MainLayout auth={auth} cartCount={cartCount} head={product.name} className='p-12'>
            <section className='absolute space-y-2'>
                <div className='space-x-1.5'>
                    <Link href={route('shop.index')} className='hover:underline'>
                        Shop
                    </Link>
                    <span>&#8250;</span>
                    <Link href={route('shop.index', { category: product.category.slug })} className='hover:underline'>
                        {product.category.name}
                    </Link>
                    <span>&#8250;</span>
                    <span>{product.name}</span>
                </div>
                <button onClick={() => history.back()} className='max-h-10 flex content-center'>
                    <img className='w-10 mr-2' src="/images/pistol_icon.png" alt="Back"/>
                    <span className='text-2xl font-bold my-auto'>Back</span> 
                </button>
            </section>
            <section className='w-1/2 mx-auto flex flex-wrap gap-8'>
                <img 
                    className='border-4 border-black bg-gray-300 grow' 
                    src={product.image ? `/storage/${product.image}` : '/images/gun_icon.png'} 
                    alt='Gun' />
                <div className='border-2 border-black rounded-xl p-8 grow flex flex-col justify-between bg-gray-400 text-black'>
                    <div className='flex flex-col gap-1'>
                        <Link href={route('shop.index', { category: product.category.slug })}>
                            <button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-lg px-2 py-px'>{product.category.name}</button>
                        </Link>
                        <Link href={route('shop.index', { manufacturer: product.manufacturer.slug })}>
                            <h4 className='text-xl text-white mt-2 hover:underline'>{product.manufacturer.name}</h4>
                        </Link>
                        <h2 className='font-bold text-4xl'>{product.name}</h2>
                            { 
                                product.reviews.length 
                                ? <div className='flex gap-2 text-xl'>
                                    <h3 className='my-auto'>{product.stars.toFixed(2)} / 5 stars</h3>
                                    <StarBar className='h-6 my-auto' stars={product.stars} starBarKey={'product'} />
                                </div>
                                : <h3 className='text-xl'>No reviews yet.</h3>
                            }
                        <h3 className='text-green-400 text-3xl font-medium'>${(product.price * quantity).toFixed(2)} <span className='text-lg text-black font-normal'>+ tax</span></h3>
                        <div className='flex my-auto w-24 h-8 mt-2'>
                            <button className='bg-gray-200 hover:bg-gray-300 w-20' onClick={() => quantity > 1 && setQuantity(oldQuant => oldQuant - 1)}>-</button>
                            <input 
                                className='text-lg w-full h-full border-none arrow-none px-0 text-center' 
                                type="number" 
                                min={1}
                                value={quantity} 
                                onChange={e => e.target.value > 0 && setQuantity(Math.round(e.target.value))} />
                            <button className='bg-gray-200 hover:bg-gray-300 w-20' onClick={() => setQuantity(oldQuant => oldQuant + 1)}>+</button>
                        </div>
                    </div>
                    {
                        added 
                        ? <button
                            className='bg-orange-300 h-12 py-2 rounded-lg border-2 border-black text-lg font-bold w-full self-end'
                            disabled
                        >Added &#10003;</button>
                        : <button 
                            className='bg-orange-400 hover:bg-orange-500 transition h-12 py-2 rounded-lg border-2 border-black text-lg font-bold w-full self-end'
                            onClick={addToCart}
                        >Add to Cart</button>
                    }
                </div>
                <div className='col-start-2 col-span-2 space-y-6'>
                    <div className='space-y-2'>
                        <h4 className='text-2xl font-bold'>Description:</h4>
                        <p className='text-lg'>{product.description}</p>
                    </div>
                    <div className='space-y-2'>
                        <h4 className='text-3xl font-bold'>Reviews <span className='font-medium'>({product.reviews.length})</span>:</h4>
                        <div className='space-y-3'>
                            <ReviewForm auth={auth} product={product} />
                            {
                                product.reviews.length
                                ? product.reviews.map(review => {
                                    return <ProductReview review={review} key={review.id} />
                                })
                                : <p className='text-xl'>No reviews yet.</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
