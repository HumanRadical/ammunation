import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <main className='text-center'>
                <h1>Welcome to Ammunation!</h1>
            </main>
        </>
    );
}
