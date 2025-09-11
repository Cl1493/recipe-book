export function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') {
        console.log("Error: word is not string")
        return str
    }
    const firstLetter = str.charAt(0).toUpperCase();
    const rest = str.slice(1);
    return firstLetter + rest;
};

export function cutTitle(str) {
    if (str.length >= 20) {
        return str.substring(0,17) + "..."
};
    return str;
};

export function cutArray(array) {
    if(!Array.isArray(array)) {
        return "";
    } 
        const newArray = array.slice(0,2);
        return newArray.map(capitalizeFirstLetter).join(", ");
};

export function formatCost(number) {
    if (number === 1) {
        return "€"
    } else if (number === 2) {
        return "€€"
    } else {
        return "€€€"
    };
};