import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function Home({ auth, head, children }) {

    return (
        <>
            <Head title={head} />
            <Navbar auth={auth} />
            {children}
            <Footer />
        </>
    );
}