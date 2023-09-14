export default function StarRating(props) {

    const { offsetLimit = 0, id } = props


    return (
        <svg width='20' height='20' viewBox="0 0 100 100">
            <defs>
                <linearGradient id={id}>
                    <stop offset="0%" stopColor="hsl(30,50%,50%)" />
                    <stop offset={offsetLimit + "%"} stopColor="hsl(30,50%,50%)" />
                    <stop offset={offsetLimit + "%"} stopColor="white" />
                    <stop offset="100%" stopColor="white" />
                </linearGradient>
            </defs>
            <g fill={`url(#${id})`} stroke="blue" strokeWidth='2'>
                <polygon points='50,0 90,100 0,40 100,40 25,100' stroke={offsetLimit === 0 ?  "blue" : null} />
                <polygon points='50,0 90,100 0,40 100,40 25,100' stroke={offsetLimit === 0 ? "transparent" :"none" } />
            </g>
        </svg>
    )
}
