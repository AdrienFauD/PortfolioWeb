import "../../css/dispenser.css"
import MoneyBoard from "./moneyBoard"
import ProductBoard from "./productBoard"
import React, { useState } from "react"

class Dispenser extends React.Component {

    constructor(props) {
        super(props)
        // here is what's inside the vending machine 
        this.state = {
            moneyInDispenser: [
                // name, value, total
                ['twos', 2, 10],
                ['ones', 1, 1],
                ['fiftys', 0.5, 2.50],
                ['twentys', 0.2, 2.40],
                ['tens', 0.1, 3.70],
                ['fives', 0.05, 0.05]
            ],
            productsInDispenser: [
                // name, total, price
                ['chips', 3, 1.5],
                ['soda', 3, 1.5],
                ['coffee', 3, 0.5],
                ['sandwich', 3, 2],
                ['ferrari', 0, 1.8],
                ['juice', 3, 1],
                ['helicopter', 0, 2],
                ['water', 3, 0.80],
            ],
            itemInBox : ''
        }
    }

    sumInDispenser = (props) => {
        return props.reduce((acc, current) => acc + current[2], 0)
    }

    // change the amount of item the user took
    handleProductsChange = (target) => {

    }

    // modify the amount of money there is in the distributor
    handleMoneyChange = (param) => {
        const tempMoneyState = [...this.state.moneyInDispenser]
        // first we add user's money in the machine


        // we remove the change we give back
        

        // change param format to remove it from the machine
        const toRemove = param.reduce((acc, current, index) => {
            if (index % 2 === 0) {
                acc.push(param.slice(index, index + 2))
            }
            return acc
        }, [])
        
        let i = 0
        console.log(toRemove)

        tempMoneyState.forEach(element => {
            if (i !== toRemove.length) {
                if (element[0] === toRemove[i][0]) {
                    console.log(element[2])
                    element[2] = (element[2] - (toRemove[i][1] * element[1])).toFixed(2)
                    i++
                }
            }

        });

        this.setState({
            moneyInDispenser: tempMoneyState
        })
    }

    render() {
        return (
            <div className="dispenser">
                <div onChange={this.handleMoneyChange}></div>
                <ProductBoard
                    productsLeft={this.state.productsInDispenser}
                    changeProductDispenser={this.handleProductsChange}
                />
                <MoneyBoard
                    moneyLeft={this.state.moneyInDispenser}
                    productsLeft={this.state.productsInDispenser}
                    sumInDispenser={this.state.sumInDispenser}
                    changeMoneyDispenser={this.handleMoneyChange}
                />
                <div class="drink-box">
                    <table>
                        nothing
                        {/* {this.state.moneyInDispenser.map(element => {
                            return (
                                <tr >
                                    <td>{element[0]}</td>
                                    <td>{element[1]}</td>
                                    <td>{element[2]}</td>
                                </tr>)
                        })} */}
                    </table>
                </div>
            </div>
        )
    }
}


export default Dispenser;