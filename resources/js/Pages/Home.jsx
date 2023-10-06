import MainLayout from '@/Layouts/MainLayout';
import CategoryCard from '@/components/CategoryCard';
import { Link } from '@inertiajs/react';

export default function Home({ auth, categories }) {
    return (
        <MainLayout auth={auth} head='Home'>
            <div className='grid grid-cols-9 grid-rows-6'>
                <img className='w-full col-span-full row-span-full' src='/images/ammunation_background2.png' />
                <button className='text-white text-2xl font-bold h-14 bg-green-500 hover:bg-green-600 transition rounded-lg col-start-5 row-start-6'>
                    <Link href={route('shop.index')} className='w-full block'>
                        Shop Now!
                    </Link>
                </button>
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
