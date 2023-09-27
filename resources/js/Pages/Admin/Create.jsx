import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProductForm from '@/components/ProductForm';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, errors, processing } = useForm()

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
                    <Back onClick={() => history.back()} className='max-h-10 flex content-center mb-10'>
                        <img className='w-8 h-8 mr-1' src='http://localhost:8000/images/chevron-left.svg' alt='Back' />
                        <span className='text-2xl my-auto'>Back</span>
                    </Back>
                    <ProductForm data={data} setData={setData} handleSubmit={handleSubmit} errors={errors} processing={processing} />
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
