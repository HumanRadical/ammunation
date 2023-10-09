import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

export default function MainLayout({ auth, cartCount, head, children, className }) {
    const metalGrid = '/images/metal_grid.jpg'

    return (
        <div className='grid'>
            <div>
                <Head title={head} />
                <Navbar auth={auth} cartCount={cartCount} />
                <div className={`min-h-screen text-white ${className}`} style={{ backgroundImage: `url(${metalGrid}` }}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}