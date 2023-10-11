import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PaginationBar from '@/components/PaginationBar';
import ProductTableRow from '@/components/ProductTableRow';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, query, products, pageCount }) {
    const currentPage = query.page ? Number(query.page) : 1

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Products</h2>}
        >
            <Head title="All Products" />

            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 py-12 flex flex-col text-gray-600">
                <Link href={route('admin.create')} className='bg-white pb-2 pt-1 px-6 mb-2 rounded-md shadow-sm hover:bg-gray-100 self-end'>
                    Add Product <span className='text-2xl font-light'>+</span>
                </Link>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-md">
                    {
                        products.length
                        ? <table className="max-w-fit min-w-full table-auto">
                                <tbody className="font-light">
                                    {
                                        products.map(product => {
                                            return <ProductTableRow product={product} key={`productrow${product.id}`} />
                                        })
                                    }
                                </tbody>
                            </table>
                        : <p className='text-lg p-6'>No products yet.</p>
                    }
                </div>
                <PaginationBar 
                    className='mt-6 shadow-sm' 
                    bgColor='white'
                    selectedColor='gray-200'
                    pageRoute='admin.index' 
                    pageCount={pageCount}
                    currentPage={currentPage} 
                />
            </div>

        </AuthenticatedLayout>
    );
}
