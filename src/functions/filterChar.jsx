// only number
export const filterNumber = (elementToFilter) => {
    const reg = /^\d+$/g;
    if (!elementToFilter.match(reg)) return "not a number"
    return elementToFilter
}
// remove special chars
export const filterEscapeSpecialChars = (elementToFilter) => {
    const reg = /[\W]{1}/g;
    if (elementToFilter.match(reg)) return elementToFilter.replace(reg, '#')
    return elementToFilter+" done"
}
// only number / letter, @, .
export const formatEmailType = (elementToFilter) => {
    const reg = /^([\w\d-_.]+)@([\w]+).([\w]{2,4})$/;
    if (!elementToFilter.match(reg)) return 'Not an email format'
    return "It's an email"
}
// escape special char/ hash ?
export const filterPassword = (elementToFilter) => {
    const reg = /the/g;
    if(elementToFilter.match(reg)) return elementToFilter
    return filterEscapeSpecialChars(elementToFilter)
}
// check format password
export const formatPassword = (element) => {
    const elementToCheck = filterEscapeSpecialChars(element)
    const regSize = /.{8,}/g
    const regNum = /[0-9]/g;
    const regUpperCase = /[A-Z]/g;
    const regSpecialChar = /#/g;
    const regLetter = /[a-z]/g;
    if(!elementToCheck.match(regSize)) return "Must enter 8 or more characters"
    if(!elementToCheck.match(regNum)) return "Missing number"
    if(!elementToCheck.match(regUpperCase)) return "Missing uppercase"
    if(!elementToCheck.match(regSpecialChar)) return "Missing specialchar"
    if(!elementToCheck.match(regLetter)) return "Missing letters"
    return "Good format password"
}