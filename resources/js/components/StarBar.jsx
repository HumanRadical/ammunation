export default function StarBar({ stars, className = '' }) {
    let starIcons = []

    for (let i = 0; i < Math.floor(stars); i++) {
        starIcons.push(<img src='http://localhost:8000/images/full_star.svg' alt='Full star' />)
    }
    if (stars % 1 !== 0) {
        starIcons.push(<img src='http://localhost:8000/images/half_star.svg' alt='Half star' />)
    }
    for (let i = Math.ceil(stars); i < 5; i++) {
        starIcons.push(<img src='http://localhost:8000/images/empty_star.svg' alt='Empty star' />)
    }

    return (
        <span className={`flex ${className}`}>
            {starIcons}
        </span>
    )
}