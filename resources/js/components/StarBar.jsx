export default function StarBar({ stars, props }) {
    let starIcons = []

    for (let i = 0; i < Math.floor(stars); i++) {
        starIcons.push(<img src='http://localhost:8000/images/full_star.svg' alt='Full star' />)
    }
    if (stars % 1 !== 0) {
        starIcons.push(<img src='http://localhost:8000/images/half_star.svg' alt='Half star' />)
    }
    for (let i = 0; i < (5 - Math.ceil(stars)); i++) {
        starIcons.push(<img src='http://localhost:8000/images/empty_star.svg' alt='Empty star' />)
    }

    return (
        <span {...props} className='flex'>
            {starIcons}
        </span>
    )
}