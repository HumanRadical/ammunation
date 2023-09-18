import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function Home({ auth, products }) {
    const productDisplays = products.map(product => {
        return <h1>{ product.name }</h1>
    })

    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <main className='text-center'>
                { productDisplays }
            </main>
        </>
    );
}
