import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, products }) {
    const productRows = products.map(product => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4 text-left whitespace-nowrap">
                    <img 
                        className='bg-gray-300 inline w-10 mr-3 border border-black'
                        src={product.image ? `http://localhost:8000/storage/${product.image}` : 'http://localhost:8000/images/gun_icon.png'} 
                        alt={product.image} />
                    <span className="font-medium">{product.name}</span>
                </td>
                <td className="py-3 px-4 text-left">
                    <span>{product.category.name}</span>
                </td>
                <td className="py-3 px-4 text-left text-green-500">
                    <span>${product.price}</span>
                </td>
                <td className="py-3 px-4 text-center">
                    <span className="bg-blue-200 text-blue-500 py-1 px-3 rounded-full text-xs">Available</span>
                </td>
                <td className="py-3 px-4 text-center">
                    <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-green-400 hover:scale-110">
                            <Link href={route('shop.show', { product: product })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                            <Link href={route('shop.index')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </Link>
                        </div>
                        <form method="POST">
                            <button className="bg-none">
                                <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="min-w-max table-auto w-full">
                            <tbody className="text-gray-600 text-sm font-light">
                                {productRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
