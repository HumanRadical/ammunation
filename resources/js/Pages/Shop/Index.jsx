import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';

export default function Index({ auth, products, manufacturers, categories, query }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} key={product.id} />
    })

    return (
        <MainLayout auth={auth} head='Shop'>
            <FilterBar manufacturers={manufacturers} categories={categories} query={query} />
            <main className='grid grid-cols-4 gap-8 w-2/3 mx-auto py-10'>
                {productCards}
            </main>
        </MainLayout>
    )
}
