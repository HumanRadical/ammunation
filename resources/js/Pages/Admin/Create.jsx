import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
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
                    <Link href={route('admin.index')} className='max-h-10 flex content-center mb-10'>
                        <img className='w-8 h-8 mr-1' src='http://localhost:8000/images/chevron-left.svg' alt='Back' />
                        <span className='text-2xl my-auto'>Back</span>
                    </Link>
                    <form onSubmit={handleSubmit} className='flex flex-col mx-auto max-w-3xl'>
                        <label className='text-gray-700 text-xl tracking-wide' htmlFor='name'>NAME</label>
                        <input 
                            className='w-full border-gray-300 rounded-md mt-1' 
                            type='text'
                            id='name' 
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            required
                        />
                        {errors.name && <p className='text-red-500 mt-1'>{errors.name}</p>}
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='category'>CATEGORY</label>
                        <input 
                            className='w-full border-gray-300 rounded-md mt-1' 
                            type='text' 
                            id='category' 
                            value={data.category}
                            onChange={e => setData('category', e.target.value)}
                            required
                        />
                        {errors.category && <p className='text-red-500 mt-1'>{errors.category}</p>}
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='price'>PRICE ($)</label>
                        <input 
                            className='w-full border-gray-300 rounded-md mt-1' 
                            type='number'
                            id='price' 
                            value={data.price}
                            onChange={e => setData('price', e.target.value)}
                            required
                        />
                        {errors.price && <p className='text-red-500 mt-1'>{errors.price}</p>}
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='image'>IMAGE</label>
                        <input 
                            className='mt-1' 
                            type='file' 
                            id='image' 
                            accept='image/*' 
                            value={data.image}
                            onChange={e => setData('image', e.target.value)}
                        />
                        {errors.image && <p className='text-red-500 mt-1'>{errors.image}</p>}
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='description'>DESCRIPTION</label>
                        <textarea 
                            className='w-full border-gray-300 rounded-md mt-1' 
                            id='description' 
                            rows='10'
                            onChange={e => setData('description', e.target.value)}
                            required
                        >{data.description}</textarea>
                        {errors.description && <p className='text-red-500 mt-1'>{errors.description}</p>}
                        <button 
                            className='bg-blue-500 max-w-min px-12 py-3 mt-10 mx-auto rounded-xl text-white text-xl tracking-wide'
                            disabled={processing}
                        >SUBMIT</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
