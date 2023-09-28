export default function StarBar({ stars, starBarKey, className = '' }) {
    let starIcons = []

    for (let i = 0; i < Math.floor(stars); i++) {
        starIcons.push(<img src='/images/full_star.svg' key={`${starBarKey}star${i}`} alt='Full star' />)
    }
    if (stars % 1 !== 0) {
        starIcons.push(<img src='/images/half_star.svg' key={`${starBarKey}star${Math.floor(stars)}`} alt='Half star' />)
    }
    for (let i = Math.ceil(stars); i < 5; i++) {
        starIcons.push(<img src='/images/empty_star.svg' key={`${starBarKey}star${i}`} alt='Empty star' />)
    }

    return (
        <span className={`flex ${className}`}>
            {starIcons}
        </span>
    )
}