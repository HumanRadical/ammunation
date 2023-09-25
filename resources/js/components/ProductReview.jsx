export default function ProductReview({ review }) {
    return (
        <article className='border border-gray-300 rounded-lg py-4 px-7 mt-3'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <img className='rounded-full w-10 h-10 my-auto' src='http://localhost:8000/images/user_icon.png' alt="" />
                    <h5 className='font-bold text-xl my-auto'>{review.user.name}</h5>
                    <img className='w-28 my-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/2560px-5_stars.svg.png" alt="" />
                </div>
                <span className='my-auto text-gray-500 text-sm'>Posted <time>{review.created_at}</time></span>
            </div>
            <p className='mt-2'>{review.body}</p>
        </article>
    )
}