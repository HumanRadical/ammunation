import MainLayout from '@/Layouts/MainLayout';
import CartCard from '@/components/CartCard';

export default function Cart({ auth, products }) {
    const cartCards = products.map(product => {
        return <CartCard product={product} key={`cartitem${product.id}`} />
    })

    return (
        <MainLayout auth={auth} head='Cart'>
            <div className='py-10'>
                <div className='mx-auto rounded-lg w-1/2 py-8 space-y-6 bg-gray-500'>
                    <h2 className='text-center text-4xl font-bold'>Cart</h2>
                    <div className='mx-auto px-12 gap-y-4 flex flex-col'>
                        {cartCards}
                        <button 
                            className='bg-orange-500 hover:bg-orange-600 transition text-2xl mt-3 px-3 py-2 rounded-lg self-end'
                        >Proceed to checkout &rarr;</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}