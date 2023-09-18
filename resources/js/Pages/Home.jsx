import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Head } from '@inertiajs/react';

export default function Home({ auth, products }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} />
    })

    return (
        <>
            <Head title='Home' />
            <Navbar auth={auth} />
            <div className='p-3 border-b border-gray-300 flex justify-center'>
                <form action='/'>
                    <label htmlFor="category">Category: </label>
                    <select className='mr-3' name='category' id='category'>
                        <option value='handgun'>Handgun</option>
                    </select>
                    <label htmlFor="price">Price Range: </label>
                    <select className='mr-3' name='price' id='price'>
                        <option value='price'>$100 - $5000</option>
                    </select>
                    <label htmlFor="price">Search: </label>
                    <input type="text" placeholder='Glock-19...' id='search' name='search' />
                </form>
            </div>
            <main className='flex flex-wrap p-10 m-auto'>
                { productCards }
            </main>
        </>
    );
}
