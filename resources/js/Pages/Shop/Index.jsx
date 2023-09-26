import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';

export default function Index({ auth, products, categories, query }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} key={product.id} />
    })

    return (
        <MainLayout auth={auth} head='Shop'>
            <FilterBar categories={categories} query={query} />
            <main className='grid grid-cols-4 gap-8 w-2/3 mx-auto py-10'>
                {productCards}
            </main>
        </MainLayout>
    )
}
