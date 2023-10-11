import { Link } from '@inertiajs/react'

export default function PaginationBar({ pageCount, currentPage, className, size = 10, bgColor = 'gray-300', selectedColor = 'gray-400', pageRoute = 'shop.index',  }) {
    let firstPageButton
    if (currentPage < 3) {
        firstPageButton = 1
    } else if (currentPage >= pageCount - 2) {
        firstPageButton = pageCount - 4
    } else {
        firstPageButton = currentPage - 2
    }

    let lastPageButton
    if (firstPageButton + 4 < pageCount) {
        lastPageButton = firstPageButton + 4
    } else {
        lastPageButton = pageCount
    }

    let pageButtons = []
    for (let i = firstPageButton; i <= lastPageButton; i++) {
        pageButtons.push(
            <Link href={route(pageRoute, { page: i })} preserveScroll key={`pagelink${i}`}>
                <button className={`w-${size} hover:bg-${selectedColor} transition h-full ${currentPage === i && `bg-${selectedColor}`}`} >
                    {i}
                </button>
            </Link>
        )
    }

    return (
        <div className={`h-${size} bg-${bgColor} max-w-fit mx-auto flex divide-x-2 divide-black text-black text-xl rounded-lg ${className}`}>
            <Link href={route(pageRoute, { page: 1 })} preserveScroll>
                <button className={`w-${size + 6} hover:bg-${selectedColor} transition h-full rounded-l-lg`}>
                    First
                </button>
            </Link>
            <Link href={currentPage > 1 && route(pageRoute, { page:  currentPage - 1 })} preserveScroll>
                <button className={`w-${size} hover:bg-${selectedColor} transition h-full`}>
                    <img className='w-6 mx-auto' src="/images/chevron_left.svg" alt="Last page" />
                </button>
            </Link>
            {pageButtons}
            <Link href={currentPage < pageCount && route(pageRoute, { page: currentPage + 1 })} preserveScroll>
                <button className={`w-${size} hover:bg-${selectedColor} transition h-full`}>
                    <img className='w-6 mx-auto' src="/images/chevron_right.svg" alt="Next page" />
                </button>
            </Link>
            <Link href={route(pageRoute, { page: pageCount })} preserveScroll>
                <button className={`w-${size + 6} hover:bg-${selectedColor} transition h-full rounded-r-lg`}>
                    Last
                </button>
            </Link>
        </div>
    )
}