import { Link } from '@inertiajs/react';

export default function Navbar(props) {
    return (
        <>
            <div className="p-6 bg-red-600 w-full grid grid-cols-8">
                <a className='col-start-4 col-span-2' href="/">
                    <img src='http://localhost:8000/images/ammunation_logo.png' alt="" />
                </a>
                <div className='flex justify-end content-center col-end-9'>
                    {props.auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-xl text-white my-auto"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-xl text-white my-auto"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-xl text-white my-auto"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}