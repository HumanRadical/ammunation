import Layout from '@/Layouts/Layout';
import CategoryCard from '@/components/CategoryCard';
import { Link } from '@inertiajs/react';

export default function Home({ auth, categories }) {
    const categoryCards = categories.map(category => {
        return <CategoryCard category={category} />
    })

    return (
        <Layout auth={auth} head='Home'>
            <div className='grid grid-cols-9 grid-rows-6'>
                <img className='w-full col-span-full row-span-full' src='http://localhost:8000/images/ammunation_background2.png' />
                <button className='text-white text-2xl font-bold h-12 bg-green-500 hover:bg-green-600 transition rounded-lg col-start-5 row-start-6'>
                    <Link href={route('shop.index')} className='w-full block'>
                        Shop Now
                    </Link>
                </button>
            </div>
            <h2 className='text-3xl font-bold text-center mt-6 mb-2'>Shop by Category:</h2>
            <div className='w-1/2 mx-auto grid grid-cols-2 grid-rows-2 mb-8'>
                {categoryCards}
            </div>
        </Layout>
    );
}
