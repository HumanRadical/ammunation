export default function StarBar({ stars, props }) {
    let starIcons = []

    if (stars % 1 == 0) {
        for (let i = 0; i < stars; i++) {
            starIcons.push(<img src='http://localhost:8000/images/full_star.svg' alt='Full star' />)
        }
        for (let i = 0; i < (5 - stars); i++) {
            starIcons.push(<img src='http://localhost:8000/images/empty_star.svg' alt='Empty star' />)
        }
    } else {
        for (let i = 0; i < Math.floor(stars); i++) {
            starIcons.push(<img src='http://localhost:8000/images/full_star.svg' alt='Full star' />)
        }
        starIcons.push(<img src='http://localhost:8000/images/half_star.svg' alt='Half star' />)
        for (let i = 0; i < (5 - Math.ceil(stars)); i++) {
            starIcons.push(<img src='http://localhost:8000/images/empty_star.svg' alt='Empty star' />)
        }
    }

    console.log(starIcons)

    return (
        <span {...props} className='flex'>
            {starIcons}
        </span>
    )
}