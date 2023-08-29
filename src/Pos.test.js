export default function PosTest(){
    const cartItems = [
        {
            count: [5, 3]
        },
        {
            values: [
                { id: 2, title: "la vie est un long fleuve tranquille" },
                { id: 3, title: "memento" }
            ]
        }
    ]
    const cartValues = cartItems[1].values
    console.log(cartValues[0].title)
    return (
        <>
            {cartValues[0].title}
            {Object.keys(cartValues).map((key, index) => (
                <div >
                    {cartValues[key].title}
                </div>
            ))}
        </>
    )
}
