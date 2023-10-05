import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProductForm from '@/components/ProductForm';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth, errors, manufacturers, categories }) {
    const { data, setData, post, processing } = useForm({
        manufacturer_id: manufacturers[0].id,
        category_id: categories[0].id,
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        post('/admin/products', { preserveState: true })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>New Product</h2>}
        >
            <Head title='New Product' />

            <div className='max-w-5xl mx-auto sm:px-6 lg:px-8 py-12 flex flex-col'>
                <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg p-10 py-12'>
                    <button onClick={() => history.back()} className='max-h-10 flex content-center mb-10'>
                        <img className='w-8 h-8 mr-1' src='/images/chevron-left.svg' alt='Back' />
                        <span className='text-2xl my-auto'>Back</span>
                    </button>
                    <ProductForm 
                        manufacturers={manufacturers} 
                        categories={categories} 
                        data={data} 
                        setData={setData} 
                        handleSubmit={handleSubmit} 
                        errors={errors} 
                        processing={processing} />
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
