import "../dispenser/dispenser.css"
import MoneyBoard from "./moneyBoard"
import ProductBoard from "./productBoard"
import React, { useState } from "react"
import DrinkBox from "./drinkBox"
import MessagePanel from "./messagePanel"


class Dispenser extends React.Component {

    constructor(props) {
        super(props)
        // here is what's inside the vending machine 
        this.state = {
            moneyInDispenser: [
                // name, value, total
                ['twos', 2, 0.00],
                ['ones', 1, 0.00],
                ['fiftys', 0.5, 52.50],
                ['twentys', 0.2, 52.40],
                ['tens', 0.1, 53.70],
                ['fives', 0.05, 50.05]
            ],
            productsInDispenser: [
                // name, total, price, img
                ['champagne', 3, 2, '🍾'],
                ['soda', 1, 1.5, '🥤'],
                ['coffee', 10, 0.5, '☕'],
                ['sandwich', 3, 2, '🥪'],
                ['ferrari', 0, 1.8, '🏎'],
                ['juice', 3, 1, '🧃'],
                ['helicopter', 0, 2, '🚁'],
                ['water', 3, 0.80, '🚰'],
            ],
            itemInBox: "",
            errorMessage: '',
            change: '',
            removeItem : null,
        }
    }

    // change the amount of item the user took
    handleProductsChange = (userChoice) => {
        this.state.productsInDispenser[userChoice][1] -= 1
        setTimeout(() => {
            this.state.itemInBox += this.state.productsInDispenser[userChoice][3]
        }, 2000);
        this.state.removeItem = userChoice+1
    }


    // add coins to stacks 
    addCoinsToMachine = (amount) => {
        const newStateMoney = this.state.moneyInDispenser.slice()
        const values = [2, 1, 0.5, 0.2, 0.1, 0.05]
        const arr = values.reduce((acc, current, index) => {
            acc.push(0)
            while (amount >= current) {
                acc[index]++
                amount = (amount - current).toFixed(2)
            }
            return acc
        }, [])

        newStateMoney.forEach((element, index) => {
            element[2] = parseFloat(element[2]) + parseFloat(arr[index] * element[1])

        })
        
        this.setState({
            moneyInDispenser: arr
        })
    }

    // modify the amount of money there is in the distributor
    handleMoneyChange = (param, num) => {
        this.setState({
            change : param
        })
        const tempMoneyState = [...this.state.moneyInDispenser]
        this.setState({
            moneyInDispenser: tempMoneyState
        })
    }


    // empty drink box
    takeItem = () => {
        this.setState({
            itemInBox: ''
        })
    }

    handleError = (param, value) => {
        let errorMessage = ''
        switch (param) {
            case "NaN" : 
                errorMessage = "please insert money"
                break
            case 0:
                errorMessage = "out of product"
                break
            case 1:
                errorMessage = "we don't take 1 and 2 cts"
                break
            case 2:
                errorMessage = "2€ max"
                break
            case 3:
                errorMessage = "where is the money Lebowski"
                break
            case 4:
                errorMessage = "you need to insert " + value
                break
            case 5:
                errorMessage = 'not enough change in the machine'
                break
            case '':
                errorMessage = "take your item"
                break
            default:
                errorMessage = 'an error occured'
                break
        }
        this.setState({
            errorMessage: errorMessage
        })
        setTimeout(() => {
            this.setState({
                errorMessage: ''
            })
        }, 5000);
    }

    userTakesMoney = () => {
        this.setState({
            change : ''
        })
    }

    handleResetAnim = () => {
        this.setState({removeItem : null})

    }

    render() {
        return (
            <div className="dispenser">
                <ProductBoard
                    productsLeft={this.state.productsInDispenser}
                    changeProductDispenser={this.handleProductsChange}
                    removeItem = {this.state.removeItem}
                    handleResetAnim = {this.handleResetAnim}
                />
                <MessagePanel
                    msg={this.state.errorMessage}
                />
                <MoneyBoard
                    error={this.handleError}
                    addCoinsToMachine={this.addCoinsToMachine}
                    moneyLeft={this.state.moneyInDispenser}
                    productsLeft={this.state.productsInDispenser}
                    sumInDispenser={this.state.sumInDispenser}
                    changeMoneyDispenser={this.handleMoneyChange}
                    giveProduct={this.handleProductsChange}
                    coins = {this.state.change}
                    userTakesMoney = {this.userTakesMoney}
                />
                <DrinkBox
                    product={this.state.itemInBox}
                    takeItem={this.takeItem}
                />
            </div>
        )
    }
}


export default Dispenser;