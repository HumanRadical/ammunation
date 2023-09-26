import MainLayout from '@/Layouts/MainLayout';
import ProductReview from '@/components/ProductReview';
import ReviewForm from '@/components/ReviewForm';
import StarBar from '@/components/StarBar';
import { Link } from '@inertiajs/react';

export default function Show({ auth, product }) {
    const reviews = product.reviews.map(review => {
        return <ProductReview review={review} key={review.id} />
    })

    return (
        <MainLayout auth={auth} head={product.name}>
            <div className='grid grid-cols-4 gap-x-10 p-12 auto-rows-auto'>
                <Link href={route('shop.index')} className='max-h-10 flex content-center'>
                    <img className='w-10 mr-2' src="http://localhost:8000/images/pistol_icon.png" alt="Back"/>
                    <span className='text-2xl font-bold my-auto'>Back</span>
                </Link>
                <img 
                    className='border-4 border-black bg-gray-300 w-full' 
                    src={product.image ? `http://localhost:8000/storage/${product.image}` : 'http://localhost:8000/images/gun_icon.png'} 
                    alt='Gun' />
                <div className='border-2 border-black rounded-xl p-8 flex flex-col justify-between bg-gray-400 text-black'>
                    <div>
                        <Link href={route('shop.index', { category: product.category.slug })}>
                            <button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-lg px-2 py-px'>{product.category.name}</button>
                        </Link>
                        <h4 className='text-xl text-white hover:underline mt-4'>{product.manufacturer}</h4>
                        <h2 className='font-bold text-4xl'>{product.name}</h2>
                        <h3 className='flex text-xl mt-2'>
                            {Math.round(product.stars * 100) / 100} / 5 stars
                            <StarBar className='h-6 ml-2' stars={product.stars} starBarKey={'product'} />
                        </h3>
                        <h3 className='text-green-400 text-3xl font-bold mt-1'>${product.price} <span className='text-lg text-black font-normal'>+ tax</span></h3>
                    </div>
                    <button 
                        className='bg-orange-400 hover:bg-orange-500 transition h-12 py-2 mt-10 rounded-lg border-2 border-black text-lg font-bold w-full self-end'
                        >Add to Cart
                    </button>
                </div>
                <div className='col-start-2 col-span-2'>
                    <h4 className='text-2xl font-bold mt-6'>Description:</h4>
                    <p className='text-lg mt-2'>{product.description}</p>
                    <h4 className='text-3xl font-bold mt-6'>Reviews:</h4>
                    <div>
                        <ReviewForm auth={auth} product={product} />
                        {reviews}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
