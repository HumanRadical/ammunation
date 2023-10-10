import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/components/FilterBar';
import PaginationBar from '@/components/PaginationBar';
import ProductCard from '@/components/ProductCard';

export default function Index({ auth, cartCount, products, manufacturers, categories, query }) {
    return (
        <MainLayout auth={auth} cartCount={cartCount} head='Shop'>
            <FilterBar manufacturers={manufacturers} categories={categories} query={query} />
            {
                products
                ? <main className='w-2/3 mx-auto py-10 space-y-10'>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            products.map(product => {
                                return <ProductCard product={product} key={`productcard${product.id}`} />
                            })
                        }
                    </div>
                    <PaginationBar />
                </main>
                : <main className='w-2/3 bg-gray-400 border-2 border-black rounded-xl text-center mx-auto my-10 py-16'>
                    <p className='text-2xl'>Nothing to see here...</p>
                </main>
            }
        </MainLayout>
    )
}
