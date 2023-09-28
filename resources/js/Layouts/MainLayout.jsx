import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function MainLayout({ auth, head, children, ...props }) {
    const metalGrid = '/images/metal_grid.jpg'

    return (
        <div className='grid'>
            <div>
                <Head title={head} />
                <Navbar auth={auth} />
                <div className='min-h-screen text-white' style={{ backgroundImage: `url(${metalGrid}` }} {...props}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}