import StarRating from "./StarRating"

export default function Rating({ number = 0 }) {
    let num = number
    let arr = []

    while (num > 0) {
        if (num < 1) { arr.push(parseFloat(num.toFixed(1) * 100)) }
        else arr.push(100)
        num -= 1
    }

    return (
        <div>
            <StarRating offsetLimit={arr[0]} id={"star1"} />
            <StarRating offsetLimit={arr[1]} id={"star2"} />
            <StarRating offsetLimit={arr[2]} id={"star3"} />
            <StarRating offsetLimit={arr[3]} id={"star4"} />
            <StarRating offsetLimit={arr[4]} id={"star5"} />
        </div>

    )
}
