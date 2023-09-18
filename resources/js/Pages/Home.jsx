import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Head } from '@inertiajs/react';

export default function Home({ auth, products, categories }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} />
    })

    const categoryOptions = categories.map(category => {
        return <option value={ category.slug }>{ category.name }</option>
    })

    return (
        <>
            <Head title='Home' />
            <Navbar auth={ auth } />
            <div className='p-3 border-b border-gray-300 flex justify-center'>
                <form action='/'>
                    <label htmlFor='category'>Category: </label>
                    <select className='mr-3' name='category' id='category'>
                        <option value=''>Select</option>
                        { categoryOptions }
                    </select>
                    <label htmlFor='price'>Price Range: </label>
                    <select className='mr-3' name='price' id='price'>
                        <option value=''>Select</option>
                        <option value='0-500'>$0 - $499.99</option>
                        <option value='500-1000'>$500 - $999.99</option>
                        <option value='1000-3000'>$1000 - $2999.99</option>
                        <option value='3000plus'>$3000+</option>
                    </select>
                    <label htmlFor='price'>Search: </label>
                    <input className='mr-3' type='text' placeholder='Glock-19...' id='search' name='search' />
                    <button className='bg-blue-500 text-white py-2 px-3 rounded border border-black'>Search</button>
                </form>
            </div>
            <main className='flex flex-wrap p-10 m-auto'>
                { productCards }
            </main>
        </>
    );
}
