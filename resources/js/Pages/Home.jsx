import Layout from '@/Layouts/Layout';

export default function Home({ auth }) {
    return (
        <Layout auth={auth} head='Home'>
            <div className='grid grid-cols-9 grid-rows-6'>
                <img className='w-full col-span-full row-span-full' src='http://localhost:8000/images/ammunation_background2.png' />
                <button className='text-white text-2xl font-bold h-12 bg-green-600 rounded-lg border-2 border-black col-start-5 row-start-6'>Shop Now</button>
            </div>
        </Layout>
    );
}
