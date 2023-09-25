export default function ResponsiveStarBar({ stars, setStars, className = '' }) {
    let starIcons = []

    for (let i = 0; i < stars; i++) {
        starIcons.push(<img src='http://localhost:8000/images/full_star.svg' onClick={() => setStars(i + 1)} alt='Full star' />)
    }
    for (let i = stars; i < 5; i++) {
        starIcons.push(<img src='http://localhost:8000/images/empty_star.svg' onClick={() => setStars(i + 1)} alt='Empty star' />)
    }

    return (
        <span className={`flex hover:cursor-pointer ${className}`}>
            {starIcons}
        </span>
    )
}