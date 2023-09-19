import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/react';

export default function Show({ auth, product }) {
    return (
        <Layout auth={auth} head={product.name}>
            <div className='grid grid-cols-3 m-10'>
                <Link href={route('shop.index')} className='max-h-10 flex content-center'>
                    <img className='w-10' src="http://localhost:8000/images/chevron-left.svg" alt=""/>
                    <span className='text-2xl font-bold my-auto'>Back</span>
                </Link>
                <div className='max-w-4xl mx-auto'>
                    <img className='border border-black p-3 bg-gray-300 mx-auto' src='http://localhost:8000/images/gun_icon.png' alt='Gun' width='500' />
                    <h2 className='font-bold text-4xl mt-6'>{product.name}</h2>
                    <h3 className='text-gray-500 text-2xl'>{product.category.name}</h3>
                    <h4 className='text-green-500 text-2xl'>${product.price}</h4>
                    <p className='text-lg mt-4'>{product.description}</p>
                </div>
            </div>
        </Layout>
    );
}
