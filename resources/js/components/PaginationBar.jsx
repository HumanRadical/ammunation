export default function PaginationBar({ size = 10, pageUrl = '/shop', perPage, itemCount, currentPage, setCurrentPage }) {
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

    let buttons = []
    for (let i = firstPage; i <= lastPage; i++) {
        buttons.push(
            <button 
                className={`w-${size} hover:bg-gray-400 transition ${currentPage === i && 'bg-gray-400'}`} 
                onClick={() => setCurrentPage(i)} 
                key={`pagebutton${i}`}
            >
                {i}
            </button>
        )
    }

    return (
        <div className={`max-w-fit mx-auto flex bg-gray-300 divide-x-2 divide-black text-black text-xl h-${size} rounded-lg`}>
            <button className={`w-${size} hover:bg-gray-400 transition rounded-l-lg`} onClick={() => currentPage > 1 && setCurrentPage(prevPage => prevPage - 1)}>
                <img className='w-6 mx-auto' src="/images/chevron_left.svg" alt="Last page" />
            </button>
            {buttons}
            <button className={`w-${size} hover:bg-gray-400 transition rounded-r-lg`} onClick={() => currentPage < pageCount && setCurrentPage(prevPage => prevPage + 1)}>
                <img className='w-6 mx-auto' src="/images/chevron_right.svg" alt="Next page" />
            </button>
        </div>
    )
}