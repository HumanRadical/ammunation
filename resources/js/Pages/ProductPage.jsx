import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function ProductPage({ auth, product }) {

    return (
        <>
            <Head title={product.name} />
            <Navbar auth={auth} />
            <div className='max-w-4xl mt-10 mx-auto'>
                <img className='border border-black p-3 bg-gray-300 mx-auto' src='http://localhost:8000/images/gun_icon.png' alt='Gun' width='500' />
                <h2 className='font-bold text-4xl mt-6'>{product.name}</h2>
                <h3 className='text-gray-500 text-2xl'>{product.category.name}</h3>
                <h4 className='text-green-500 text-2xl'>${product.price}</h4>
                <p className='text-lg mt-4'>{product.description}</p>
            </div>
        </>
    );
}
