import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Head } from '@inertiajs/react';

export default function Home({ auth, products }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} />
    })

    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <main className='flex flex-wrap p-10 m-auto'>
                { productCards }
            </main>
        </>
    );
}
