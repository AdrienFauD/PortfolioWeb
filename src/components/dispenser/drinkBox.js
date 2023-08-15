import { useState } from "react"

export default function DrinkBox(props) {
    const { product, takeItem } = props
    const [toggle, setToggle] = useState(true)
    const [anim, setAnim] = useState(true)

    const flipFlapper = () => {
        setTimeout(() => { toggle === true ? setToggle(false) : setToggle(true) }, 500)
    }

    return (
        <>

            <div className="drink-box"
                onClick={() => flipFlapper()}
                style={{ position: "relative", fontSize: '3em' }}>

                <div className="flapper">

                </div>

                <div className="box"
                    onClick={() => takeItem()}>
                    {product}
                </div>

            </div>
        </>
    )
}