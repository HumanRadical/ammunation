export default function PaginationBar({ size = 10 }) {
    return (
        <div className={`max-w-fit mx-auto flex bg-gray-300 divide-x-2 divide-black text-black text-xl h-${size} rounded-lg`}>
            <button className={`w-${size} hover:bg-gray-400 transition rounded-l-lg`}>
                <img className='w-6 mx-auto' src="/images/chevron_left.svg" alt="Last page" />
            </button>
            <button className={`w-${size} hover:bg-gray-400 transition`}>
                1
            </button>
            <button className={`w-${size} hover:bg-gray-400 transition`}>
                2
            </button>
            <button className={`w-${size} hover:bg-gray-400 transition`}>
                3
            </button>
            <button className={`w-${size} hover:bg-gray-400 transition`}>
                4
            </button>
            <button className={`w-${size} hover:bg-gray-400 transition`}>
                5
            </button>
            <button className={`w-${size} hover:bg-gray-400 transition rounded-r-lg`}>
                <img className='w-6 mx-auto' src="/images/chevron_right.svg" alt="Last page" />
            </button>
        </div>
    )
}