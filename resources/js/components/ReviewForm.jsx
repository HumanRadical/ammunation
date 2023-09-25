import { Link, useForm } from '@inertiajs/react';
import ResponsiveStarBar from './ResponsiveStarBar';
import { useEffect, useState } from 'react';

export default function ReviewForm({ auth, product }) {
    const { data, setData, post, reset, errors, processing } = useForm({
        body: '',
        stars: 0
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        post(`/shop/${product.slug}/reviews`, { 
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                reset()
            }
        })
    }

    return (
        <div className='border border-gray-300 rounded-lg py-4 px-7 mt-3'>
            {
                auth.user
                ? 
                <>
                    <h3 className='text-2xl font-bold'>Add a review:</h3>
                    <form className='flex flex-wrap mt-3' onSubmit={handleSubmit}>
                        <img className='rounded-full w-10 h-10 my-auto' src='http://localhost:8000/images/user_icon.png' alt='User Icon' />
                        <ResponsiveStarBar className='h-7 my-auto ml-2' stars={data.stars} setData={setData} />
                        {errors.stars && <p className='text-red-500 mt-1 w-full'>{errors.stars}</p>}
                        <textarea 
                            className='w-full mt-3 rounded-lg border-gray-500' 
                            value={data.body}
                            onChange={e => setData('body', e.target.value)} 
                            placeholder='Describe your experience...'
                            rows='4' 
                            required />
                        {errors.body && <p className='text-red-500 mt-1 w-full'>{errors.body}</p>}
                        <button 
                            className='bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold rounded-lg px-4 py-2 mt-3'
                            disabled={processing}
                            >SUBMIT
                        </button>
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