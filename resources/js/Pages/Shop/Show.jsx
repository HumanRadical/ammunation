import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Show({ auth, product }) {
    return (
        <MainLayout auth={auth} head={product.name}>
            <div className='grid grid-cols-4 gap-x-10 m-12 auto-rows-auto'>
                <Link href={route('shop.index')} className='max-h-10 flex content-center'>
                    <img className='w-10 mr-2' src="http://localhost:8000/images/pistol_icon.png" alt="Back"/>
                    <span className='text-2xl font-bold my-auto'>Back</span>
                </Link>
                <img 
                    className='border-4 border-black bg-gray-300 w-full' 
                    src={product.image ? `http://localhost:8000/storage/${product.image}` : 'http://localhost:8000/images/gun_icon.png'} 
                    alt='Gun' />
                <div className='border-2 border-gray-400 rounded-xl p-8 flex flex-col justify-between'>
                    <div>
                        <Link href={route('shop.index', { category: product.category.slug })}>
                            <button className='border-2 border-blue-500 rounded-md text-blue-500 text-lg px-2 py-px'>{product.category.name}</button>
                        </Link>
                        <h4 className='text-2xl mt-4'>Manufacturer</h4>
                        <h2 className='font-bold text-4xl'>{product.name}</h2>
                        <h3 className='text-green-500 text-3xl font-bold mt-2'>${product.price} <span className='text-lg text-black font-normal'>+ tax</span></h3>
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
                        <article className='border border-gray-300 rounded-lg py-4 px-7 mt-3'>
                            <div className='flex justify-between'>
                                <div className='flex gap-2'>
                                    <img className='border border-black rounded-full w-10 h-10 my-auto' src='https://people.com/thmb/qXgZGus8WMQFvj5ekGJL80i2z-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(799x0:801x2)/41611641_331860500894482_7053792236417950114_n-2000-a7bb67e109ab455898b43a4cc3158af1.jpg' alt="" />
                                    <h5 className='font-bold text-xl my-auto'>Kanye West</h5>
                                    <img className='w-28 my-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/2560px-5_stars.svg.png" alt="" />
                                </div>
                                <time className='my-auto text-gray-500 text-sm'>Posted 3 days ago.</time>
                            </div>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores beatae consectetur rerum et optio culpa, id voluptas nihil quos quibusdam quidem excepturi quas in molestias officia repellat laboriosam. Exercitationem.</p>
                        </article>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
