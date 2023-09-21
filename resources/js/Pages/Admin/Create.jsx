import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Create({ auth }) {
    const handleSubmit = () => {
        //
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Product</h2>}
        >
            <Head title="New Product" />

            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 py-12 flex flex-col">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10 py-12">
                    <Link href={route('admin.index')} className='max-h-10 flex content-center mb-10'>
                        <img className='w-8 h-8 mr-1' src="http://localhost:8000/images/chevron-left.svg" alt="Back" />
                        <span className='text-2xl my-auto'>Back</span>
                    </Link>
                    <form onSubmit={handleSubmit} className='flex flex-col mx-auto max-w-3xl'>
                        <label className='text-gray-700 text-xl tracking-wide' htmlFor='name'>NAME</label>
                        <input className='w-full border-gray-300 rounded-md mt-1' type="text" name='name' id='name' />
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='category'>CATEGORY</label>
                        <input className='w-full border-gray-300 rounded-md mt-1' type="text" name='category' id='category' />
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='price'>PRICE ($)</label>
                        <input className='w-full border-gray-300 rounded-md mt-1' type="number" name='price' id='price' />
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='image'>IMAGE</label>
                        <input className='mt-1' type="file" name='image' id='image' accept='image/*' />
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='description'>DESCRIPTION</label>
                        <textarea className='w-full border-gray-300 rounded-md mt-1' name='description' id='description' rows='10'></textarea>
                        <button className='bg-blue-500 max-w-min px-12 py-3 mt-10 mx-auto rounded-xl text-white text-xl tracking-wide'>SUBMIT</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
