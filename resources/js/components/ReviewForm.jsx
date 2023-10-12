import { Link, useForm } from '@inertiajs/react';
import ResponsiveStarBar from './ResponsiveStarBar';

export default function ReviewForm({ auth, product }) {
    const { data, setData, post, reset, errors, processing } = useForm({
        body: ''
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
        <div className='border border-black rounded-lg py-4 px-7 bg-gray-400 text-black'>
            {
                auth.user
                ? 
                <form className='space-y-3' onSubmit={handleSubmit}>
                    <h3 className='text-2xl font-bold'>Add a review:</h3>
                    <div className='flex flex-wrap'>
                        <img className='rounded-full w-10 h-10 my-auto' src='/images/user_icon.png' alt='User Icon' />
                        <ResponsiveStarBar className='h-7 my-auto ml-2' stars={data.stars ? data.stars : 0} setData={setData} />
                        {errors.stars && <p className='text-red-500 w-full mt-1'>{errors.stars}</p>}
                    </div>
                    {
                        product.reviews.find(review => review.user_id === auth.user.id)
                        && <p className='text-white'>You've already left a review, update your old one?</p>
                    }
                    <textarea 
                        className='w-full rounded-lg border-gray-500' 
                        value={data.body}
                        onChange={e => setData('body', e.target.value)} 
                        placeholder='Describe your experience...'
                        rows='4' 
                        required />
                    {errors.body && <p className='text-red-500 w-full mt-1'>{errors.body}</p>}
                    <button 
                        className='bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold rounded-lg px-4 py-2 mt-3'
                        disabled={processing}
                        >SUBMIT
                    </button>
                </form>
                : 
                <h4 className='text-xl font-bold'>
                    <Link className='text-blue-500 hover:underline' href={route('login')}>Log in</Link> or <Link className='text-blue-500 hover:underline' href={route('register')}>Register</Link> to add a review!
                </h4>
            }
        </div>
    )
}