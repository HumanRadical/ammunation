import Layout from '@/Layouts/Layout';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';

export default function Index({ auth, products, categories, query }) {
    const productCards = products.map(product => {
        return <ProductCard product={product} key={product.id} />
    })

    return (
        <Layout auth={auth} head='Shop'>
            <FilterBar categories={categories} query={query} />
            <main className='flex flex-wrap p-10'>
                {productCards}
            </main>
        </Layout>
    )
}
