import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function Navbar({ auth, cartCount }) {
    return (
        <nav className="p-6 bg-red-700 w-full grid grid-cols-8">
            <div className='my-auto space-x-4'>
                <Link
                    href={route('home')}
                    className="font-semibold text-xl text-white"
                >
                    Home
                </Link>
                <Link
                    href={route('shop.index')}
                    className="font-semibold text-xl text-white"
                >
                    Shop
                </Link>
            </div>
            <Link className='col-start-4 col-span-2' href={route('home')}>
                <ApplicationLogo />
            </Link>
            <div className='flex justify-end col-end-9 my-auto space-x-4'>
                {auth.user ? (
                    <>
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-xl text-white"
                        >
                            Dashboard
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="font-semibold text-xl text-white"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="font-semibold text-xl text-white"
                        >
                            Register
                        </Link>
                    </>
                )}
                <Link
                    href={route('cart.show')}
                    className='relative'
                >
                    <img className='h-8' src="/images/cart.svg" alt="Cart" />
                    {
                        cartCount
                        ? <span class="absolute bg-white text-red-600 px-2 py-1 text-xs font-bold rounded-full -top-2.5 -right-3">{cartCount}</span>
                        : ''
                    }
                </Link>
            </div>
        </nav>
    )
}