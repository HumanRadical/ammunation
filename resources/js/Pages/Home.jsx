import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {

    return (
        <>
            <Head title='Home' />
            <Navbar auth={auth} />
            <main className='flex flex-wrap p-10 m-auto'>
                <h2>Welcome to ammunation!</h2>
            </main>
        </>
    );
}
