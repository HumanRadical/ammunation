import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function Navbar({ auth }) {
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
                >
                    <img className='h-7' src="/images/cart.svg" alt="Cart" />
                </Link>
            </div>
        </nav>
    )
}