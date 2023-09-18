import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Home({ auth, products, categories, query }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} />
    })

    const categoryOptions = categories.map(category => {
        return <option value={category.slug}>{category.name}</option>
    })

    const [minVal, setMinVal] = useState(query.min)
    const [maxVal, setMaxVal] = useState(query.max)
    const [searchVal, setSearchVal] = useState(query.search)

    return (
        <>
            <Head title='Home' />
            <Navbar auth={auth} />
            <div className='p-3 border-b border-gray-300 flex justify-center'>
                <form action='/'>
                    <label htmlFor='category'>Category: </label>
                    <select className='mr-3' name='category' id='category'>
                        <option value=''>Select</option>
                        {categoryOptions}
                    </select>
                    <label htmlFor='min'>Min: </label>
                    <input className='mr-3 w-20' type='number' placeholder='$$$' id='min' name='min' value={minVal} onChange={e => setMinVal(e.target.value)} />
                    <label htmlFor='max'>Max: </label>
                    <input className='mr-3 w-20' type='number' placeholder='$$$' id='max' name='max' value={maxVal} onChange={e => setMaxVal(e.target.value)} />
                    <label htmlFor='search'>Search: </label>
                    <input className='mr-3' type='text' placeholder='Glock-19...' id='search' name='search' value={searchVal} onChange={e => setSearchVal(e.target.value)} />
                    <button className='bg-blue-500 text-white py-2 px-3 rounded border border-black'>Search</button>
                </form>
            </div>
            <main className='flex flex-wrap p-10 m-auto'>
                { productCards }
            </main>
        </>
    );
}
