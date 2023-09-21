import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Show({ auth, product }) {
    return (
        <MainLayout auth={auth} head={product.name}>
            <div className='grid grid-cols-4 gap-x-10 m-10'>
                <Link href={route('shop.index')} className='max-h-10 flex content-center'>
                    <img className='w-10 mr-2' src="http://localhost:8000/images/pistol_icon.png" alt="Back"/>
                    <span className='text-2xl font-bold my-auto'>Back</span>
                </Link>
                <img 
                    className='border-4 border-black bg-gray-300 w-full' 
                    src={product.image ? `http://localhost:8000/storage/${product.image}` : 'http://localhost:8000/images/gun_icon.png'} 
                    alt='Gun' />
                <div className='max-w-4xl mx-auto grid'>
                    <h2 className='font-bold text-4xl mt-6'>{product.name}</h2>
                    <h3 className='text-gray-500 text-2xl'>{product.category.name}</h3>
                    <h3 className='text-green-500 text-2xl'>${product.price}</h3>
                    <h4 className='text-xl font-bold mt-4'>Description:</h4>
                    <p className='text-lg mt-px'>{product.description}</p>
                    <button 
                        className='bg-orange-400 hover:bg-orange-500 transition h-12 py-2 rounded-lg border-2 border-black text-lg font-bold w-full self-end'
                        >Add to Cart
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}
