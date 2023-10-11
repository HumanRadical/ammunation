import { Link } from '@inertiajs/react'

export default function PaginationBar({ size = 10, pageRoute = 'shop.index', perPage, itemCount, currentPage }) {
    const pageCount = Math.ceil(itemCount / perPage)

    let firstPage
    if (currentPage < 3) {
        firstPage = 1
    } else if (currentPage >= pageCount - 2) {
        firstPage = pageCount - 4
    } else {
        firstPage = currentPage - 2
    }

    let lastPage = firstPage + 4 < pageCount ? firstPage + 4 : pageCount
    if (firstPage + 4 < pageCount) {
        lastPage = firstPage + 4
    } else {
        lastPage = pageCount
    }

    let pageButtons = []
    for (let i = firstPage; i <= lastPage; i++) {
        pageButtons.push(
            <Link href={route(pageRoute, { page: i })} preserveScroll key={`pagelink${i}`}>
                <button className={`w-${size} hover:bg-gray-400 transition h-full ${currentPage === i && 'bg-gray-400'}`} >
                    {i}
                </button>
            </Link>
        )
    }

    return (
        <div className={`max-w-fit mx-auto flex bg-gray-300 divide-x-2 divide-black text-black text-xl h-${size} rounded-lg`}>
            <Link href={currentPage > 1 && route(pageRoute, { page:  currentPage - 1 })} preserveScroll>
                <button className={`w-${size} hover:bg-gray-400 transition h-full rounded-l-lg`}>
                    <img className='w-6 mx-auto' src="/images/chevron_left.svg" alt="Last page" />
                </button>
            </Link>
            {pageButtons}
            <Link href={currentPage < pageCount && route(pageRoute, { page: currentPage + 1 })} preserveScroll>
                <button className={`w-${size} hover:bg-gray-400 transition h-full rounded-r-lg`}>
                    <img className='w-6 mx-auto' src="/images/chevron_right.svg" alt="Next page" />
                </button>
            </Link>
        </div>
    )
}