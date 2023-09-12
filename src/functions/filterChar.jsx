export default function filterChar() {
    // only number
    const filterNumber = (elementToFilter) => {
        const reg = /\d+/g;
        if(elementToFilter.match(reg)) return
        return elementToFilter
    }
    // remove special chars
    const filterEscapeSpecialChars = (elementToFilter) => {
        const reg = /\W+/g;
        if(elementToFilter.match(reg)) return elementToFilter.replace(reg, '/')
        return elementToFilter
    }
    // only number / letter, @, .
    const filterEmailType = (elementToFilter) => {
        const reg = /\[@.]/;
        if(!elementToFilter.match(reg)) return 'Not an email format'
        return filterEscapeSpecialChars(elementToFilter)
    }
    // escape special char/ hash ?
    const filterPassword = (elementToFilter) => {
        const reg = /\[@.]/;
        return
    }

}