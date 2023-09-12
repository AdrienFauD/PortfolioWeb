export default function ReturnedCoins(props) {
    const { coins, userTakesMoney } = props

    const renderCoins = (coins) => {
        let result = ''
        for (const key in coins) {
            if (Object.hasOwnProperty.call(coins, key)) {
                const element = coins[key];
                if(typeof element !== 'number') {
                    result += element +':'
                } else {
                    result += element
                }
                
            }
        }


        return result
    
    }

    return (
        <div className="coin-box" onClick={() => userTakesMoney()}>
            {renderCoins(coins)}
        </div>
    )
}