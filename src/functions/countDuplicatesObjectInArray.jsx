import { isObjectsEqual } from '../functions/isObjectsEqual'

export default function countDuplicatesObjectInArray(array) {
    let count = []
    let values = []
    const result = array.sort((a, b) => a.id > b.id ? 1 : -1)
        .reduce((acc, current) => {
            const accL = (acc.length) - 1
            if (acc.length === 0) {
                values.push(current)
            }
            if (typeof acc[accL] !== 'object') {
                acc.push(current)
                count.push(1)
            } else if (!isObjectsEqual(acc[accL], current)) {
                values.push(current)
                acc.push(current)
                count.push(1)
            }
            else {
                count[count.length - 1]++
            }

            return acc
        }, [])

    return [{ count }, { values }]

}

