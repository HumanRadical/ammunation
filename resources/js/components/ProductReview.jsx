import StarBar from './StarBar';

export default function ProductReview({ review }) {
    return (
        <article className='border border-gray-300 rounded-lg py-4 px-7 mt-3'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <img className='rounded-full w-10 h-10 my-auto' src='http://localhost:8000/images/user_icon.png' alt="" />
                    <h5 className='font-bold text-xl my-auto'>{review.user.name}</h5>
                    <StarBar starBarKey={`review${review.id}`} stars={review.stars} />
                </div>
                <span className='my-auto text-gray-500 text-sm'>Posted <time>{review.created_at}</time></span>
            </div>
            <p className='mt-2'>{review.body}</p>
        </article>
    )
}