import MainLayout from '@/Layouts/MainLayout';
import CategoryCard from '@/components/CategoryCard';
import { Link } from '@inertiajs/react';

export default function Home({ auth, cartCount, categories }) {
    return (
        <MainLayout auth={auth} cartCount={cartCount} head='Home'>
            <div className='relative'>
                <img className='w-full' src='/images/ammunation_background2.png' />
                    <Link href={route('shop.index')}>
                        <button className='text-white text-2xl font-bold py-3 mx-40 bg-green-500 hover:bg-green-600 transition rounded-lg absolute bottom-10 inset-x-1/3'>
                            Shop Now!
                        </button>
                    </Link>
            </div>
            {
                categories
                && <div className='w-1/2 mx-auto py-8 space-y-4'>
                    <h2 className='text-3xl text-center'>Shop by Category:</h2>
                    <div className='grid grid-cols-2 grid-rows-2'>
                        {
                            categories.map(category => {
                                return <CategoryCard category={category} key={category.id} />
                            })
                        }
                    </div>
                </div>
            }
        </MainLayout>
    );
}
