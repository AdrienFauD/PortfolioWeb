import React from "react"

class Testage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            moneyzzzz: [
                // name, value, total
                ['twos', 2, 10],
                ['ones', 1, 1],
                ['fiftys', 0.5, 2.50],
                ['twentys', 0.2, 2.40],
                ['tens', 0.1, 3.70],
                ['fives', 0.05, 0.05]
            ]
        }
    }


    // prendre un montant et le convertir en pièces 
    truc = () => {
        let moneyInserted = 25.75
        const values = [2, 1, 0.5, 0.2, 0.1, 0.05]
        const arr = values.reduce((acc, current, index) => {
            acc.push(0)
            while (moneyInserted >= current) {
                    acc[index]++
                    moneyInserted = (moneyInserted - current).toFixed(2)
                }
            
            return acc
        }, [])

        return arr
    }


    render() {
        return (
            <>
                <button onClick={this.handleChange}>Show me the state</button>
                <table>
                    {this.state.moneyzzzz.map(element => {
                        return (
                            <tr>
                                <td>{element[0]}</td>
                                <td>{element[1]}</td>
                                <td>{element[2]}</td>
                            </tr>)
                    })}
                </table>
            </>
        )
    }

}

export default Testage