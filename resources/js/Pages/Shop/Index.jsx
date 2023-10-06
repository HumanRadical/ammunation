import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';

export default function Index({ auth, products, manufacturers, categories, query }) {
    return (
        <MainLayout auth={auth} head='Shop'>
            <FilterBar manufacturers={manufacturers} categories={categories} query={query} />
            {
                products
                ? <main className='grid grid-cols-4 gap-8 w-2/3 mx-auto py-10'>
                    {
                        products.map(product => {
                            return <ProductCard product={product} key={`productcard${product.id}`} />
                        })
                    }
                </main>
                : <main className='w-2/3 bg-gray-400 border-2 border-black rounded-xl text-center mx-auto my-10 py-16'>
                    <p className='text-2xl'>Nothing to see here...</p>
                </main>
            }
        </MainLayout>
    )
}
