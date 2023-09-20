import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function MainLayout({ auth, head, children, ...props }) {

    return (
        <div className='min-h-screen grid grid-rows-none'>
            <div>
                <Head title={head} />
                <Navbar auth={auth} />
                <div {...props}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}