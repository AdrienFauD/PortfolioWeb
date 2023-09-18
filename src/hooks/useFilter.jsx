export default function useFilter(object, callback) {

    const filteredObject = object.filter(value => callback(value))

    return (
        filteredObject
    )
}
