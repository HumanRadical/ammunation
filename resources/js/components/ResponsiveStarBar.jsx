export default function ResponsiveStarBar({ stars, setData, className = '' }) {
    let starIcons = []

    for (let i = 0; i < stars; i++) {
        starIcons.push(<img src='/images/full_star.svg' onClick={() => setData('stars', i + 1)} key={`formstar${i}`} alt='Full star' />)
    }
    for (let i = stars; i < 5; i++) {
        starIcons.push(<img src='/images/empty_star.svg' onClick={() => setData('stars', i + 1)} key={`formstar${i}`}  alt='Empty star' />)
    }

    return (
        <span className={`flex hover:cursor-pointer ${className}`}>
            {starIcons}
        </span>
    )
}