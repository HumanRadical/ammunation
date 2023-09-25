import { Link } from '@inertiajs/react';
import ResponsiveStarBar from './ResponsiveStarBar';
import { useState } from 'react';

export default function ReviewForm({ auth }) {
    const [stars, setStars] = useState(1)

    const handleSubmit = () => {
        //
    }

    return (
        <div className='border border-gray-300 rounded-lg py-4 px-7 mt-3'>
            {
                auth.user
                ? 
                <>
                    <h3 className='text-2xl font-bold'>Add a review:</h3>
                    <form className='flex flex-wrap mt-3' onSubmit={handleSubmit}>
                        <img className='rounded-full w-10 h-10 my-auto' src='http://localhost:8000/images/user_icon.png' alt="" />
                        <ResponsiveStarBar className='h-7 my-auto ml-2' stars={stars} setStars={setStars} />
                        <textarea className='w-full mt-3 rounded-lg border-gray-500' name='body' rows='4' required></textarea>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold rounded-lg px-4 py-2 mt-3'>SUBMIT</button>
                    </form>
                </>
                : 
                <h4 className='text-xl font-bold'>
                    <Link className='text-blue-500 hover:underline' href={route('login')}>Log in</Link> or <Link className='text-blue-500 hover:underline' href={route('register')}>Register</Link> to add a review!
                </h4>
            }
        </div>
    )
}