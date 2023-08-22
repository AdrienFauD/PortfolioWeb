import { useState, useEffect } from 'react'
import '../components/css/home.css'
import data from "../components/cards.json"

export default function Home() {
    const [cards, setCards] = useState({
        title: '',
        text: '',
        link: ''
    })
    const [tempCards, setTempCards] = useState({
        title: '',
        text: '',
        link: ''
    })

    useEffect(() => {
        setCards(data)
    }, [])

    const handleChange = (e) => {
        setTempCards(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        setCards({
            ...cards,
            [Object.keys(cards).length]: tempCards
        })
    }

    const handleDelete = (el) => {
        console.log(Object.keys(cards[el]).length)
        setCards(prev => ({
            ...prev,
            [el]: ''
        }))

    }


    return (
        <>

            {/* <div className='svg-container'>
                <svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1" height="1">
                        <animate
                            attributeName="rx"
                            values="0;1;0"
                            dur="1s"
                            repeatCount="indefinite" />
                    </rect>
                </svg>
            </div> */}

            <div className="container bg-ternary">
                <div className='row'>
                    <div className="card m-auto" style={{ width: "18rem" }}>
                        <div className='card-body'>
                            <form >
                                <label>
                                    <input
                                        placeholder='Title'
                                        type="text"
                                        name='title'
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder='Text'
                                        type="text"
                                        name='text'
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder='Link'
                                        type="text"
                                        name='link'
                                        onChange={handleChange}
                                    />
                                </label>
                                <div class="input-group mb-3">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={handleSubmit}>Add</button>

                                </div>


                            </form>
                        </div>
                    </div>
                </div>
                <div className=" row">
                        {Object.keys(cards).map((keyName, i) => (
                            Object.keys(cards[i] || {}).length > 0 ?
                                <div key={keyName} className='col card' style={{ maxWidth: '18rem', minWidth : '16rem', height: '100%', maxHeight : "300px"}}>
                                    <div className='card-body '>
                                        <div className='fs-2' style={{ float: 'right', border : "solid red 1px", borderRadius : '5px', color : "red" }} onClick={() => handleDelete(i)}>X</div>
                                        <h5 className='card-title' style={{maxHeight : "4em",overflow : "hidden"}}>{cards[keyName].title}</h5>
                                        <div className='card-text' style={{maxHeight : "10em",overflow : "auto"}}>{cards[keyName].text}</div>
                                        <a href={`${cards[keyName].link}`} className='btn btn-primary' style={{maxHeight : "25%", minHeight : "3em",overflow : "auto"}}>go</a>
                                    </div>
                                </div>
                                : <div></div>
                        ))}
                </div>

            </div>

        </>
    )
}