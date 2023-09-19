import FilterBar from '@/components/FilterBar';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Head } from '@inertiajs/react';

export default function Index({ auth, products, categories, query }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} key={product.id} />
    })

    return (
        <>
            <Head title='Shop' />
            <Navbar auth={auth} />
            <FilterBar categories={categories} query={query} />
            <main className='flex flex-wrap p-10'>
                {productCards}
            </main>
        </>
    )
}
