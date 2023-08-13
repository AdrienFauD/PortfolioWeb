import { useState, useEffect } from "react";

export default function MoneyBoard(props) {
    const keyboard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '*'];
    const { moneyLeft, productsLeft, sumInDispenser, changeMoneyDispenser } = props
    const [moneyInserted, setMoneyInserted] = useState(0)
    const [amountGiven, setAmountGiven] = useState(0)

    
    
    // when the change has been inserted, the user choose what product he wants
    const handleInsertMoney = (userChoice) => {
        const amount = parseFloat(amountGiven).toFixed(2)
        console.log(amount)
        if((amount * 100) % 5 != 0.00 ){
            alert("On ne prend pas les pièces de 1 et 2 cts")
            return
        }
        const productValue = productsLeft[userChoice][2]
        if(amount > 2 ) {
            alert("2€ max")
            return
        }
        // nothing can happen if no money is provided
        if (amount === 0) alert("where is the money Lebowski")

        // if not enough money is added, we give it back
        else if (amount < productValue) {
            alert("you need to insert " + productValue)
            giveMoney(amount)
        }

        // if the amount is the exact price, we just give the product
        else if (amount >= productValue) {
            if (amount == productValue) alert("take your thing")
            else {
                // total in dispenser - user' change
                let changeToGiveBack = amount - productValue
                giveMoney(changeToGiveBack.toFixed(2))
            }
        }
    }




    // handles what happens with the money when it is in the machine
    const giveMoney = (num) => {

        // 

        let money = [...moneyLeft]
        let arr = []
        let i = 0
        let newNumber = 0
        // tant qu'on a pas rendu tout les sous : 
        while (num > 0) {
            
            // on stop quand on a passé la dernière valeur du tableau   
            if (i == 6) {
                if (num != 0) {
                    newNumber = num
                    alert("not enough change in the machine")
                    arr.length = 0
                } 
                // fin du game
                break
            } else {
                // si l'indice i a de l'argent et que cette valeur est infèrieure à num : 
                if (num - money[i][1] >= 0) {
                    if (money[i][2] === 0) {
                        i++
                    } else {
                        arr.push([money[i][0], money[i][1]])
                        num = num - money[i][1]
                        money[i][2] = (money[i][2] - money[i][1]).toFixed(2)
                    }

                // si il  n'y a plus assez de monnaie à rendre, on passe à la valeur suivante
                } else {
                    i++
                }
            }
            
        }
        const arrNoDupes = countDuplicates(arr)
        changeMoneyDispenser(arrNoDupes)
    }

    
    // loop through an array of number and check if the element is already listed
    const countDuplicates = numbers => {
        const arr = []
        let el = 0
        
        for(const num of numbers){
            if(arr.indexOf(num[0]) < 0){
                arr.push(num[0], 1)
                el++
            } else {
                console.log('first')
                arr[el]++
            }
        }
        return arr;
    }



    // when the user has selected the amount to give, when he presses enter the money goes in the machine
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setMoneyInserted(amountGiven)
        }
    }

    // when the product has been bought, we pass it to the drink box and remove it from the machine
    const handleGiveProduct = () => {

    }

    return (
        // creating the keyboard dynamically 
        <><div className="choice-pad">
            {keyboard.map(el => {
                if (el + 1 === 10) return <div className='pad-num' onClick={() => handleInsertMoney(0)} style={{ gridArea: "4/2" }}>0</div>
                if (el === '*') return <div className='pad-num' onClick={() => giveMoney()} style={{ gridArea: "4/3" }}>*</div>
                else return (<div className='pad-num' onClick={() => handleInsertMoney(el)}>{el + 1}</div>)
            })}

        </div>
            <div className="coin-inserter" >
                Type the amount you want to spend (max 2€): {amountGiven}
                <input
                    value={amountGiven}
                    onChange={e => setAmountGiven(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

            </div>
        </>
    )
}