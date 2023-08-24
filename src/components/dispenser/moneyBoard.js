import { useState, useEffect } from "react";
import ReturnedCoins from "./returnedCoins"

export default function MoneyBoard(props) {
    const keyboard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '*'];
    const { coins, moneyLeft, productsLeft, sumInDispenser, changeMoneyDispenser, addCoinsToMachine, giveProduct, error, userTakesMoney } = props
    const [moneyInserted, setMoneyInserted] = useState(0)
    const [amountGiven, setAmountGiven] = useState(0)



    // when the change has been inserted, the user choose what product he wants
    const handleInsertMoney = (userChoice) => {
        if (userChoice >= 8 || typeof userChoice !== 'number') { return }
        const amount = parseFloat(amountGiven).toFixed(2)
        const productValue = productsLeft[userChoice][2]
        // no product left
        if (productsLeft[userChoice][1] === 0) {
            error(0)
            return
        }

        if ((amount * 100).toFixed(2) % 5 != 0.00) {
            error(1)
            return
        }

        // max money you can add : 2€
        if (amount > 2) {
            error(2)
            return
        }

        // nothing can happen if no money is provided
        if (amount === 0) error(3)

        // if not enough money is added, we give it back
        else if (amount < productValue) {
            error(4, productValue)
        }

        // if the amount is the exact price, we just give the product
        else if (amount >= productValue) {
            addCoinsToMachine(amountGiven)
            giveProduct(userChoice)
            if (amount === productValue) error("")
            else {
                let changeToGiveBack = amount - productValue
                giveMoney(changeToGiveBack.toFixed(2))

            }
        }
        setAmountGiven(0)
    }




    // handles what happens with the money when it is in the machine
    const giveMoney = (moneyInsertedNum) => {
        
        let num = moneyInsertedNum
        let money = [...moneyLeft]
        let arr = []
        let i = 0
        while (num > 0) {

            // force loop to stop when we checked every coin stacks 
            if (i > 5) {
                if (num !== 0) {
                    error(5)
                    arr.length = 0
                }
                break
            } else {
                // si l'indice i a de l'argent et que cette valeur est infèrieure à num : 
                if ((num - money[i][1]).toFixed(2) >= 0) {

                    if (money[i][2] > 0) {
                        arr.push([money[i][0], money[i][1]])
                        num = (num - money[i][1]).toFixed(2)
                        money[i][2] = (money[i][2] - money[i][1]).toFixed(2)
                    } else {
                        i++
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

        for (const num of numbers) {
            if (arr.indexOf(num[0]) < 0) {
                arr.push(num[0], 1)
                el++
            } else {
                arr[el]++
            }
        }
        return arr;
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
                />

                <ReturnedCoins
                    coins={coins}
                    userTakesMoney={userTakesMoney}
                />

            </div>
        </>
    )
}