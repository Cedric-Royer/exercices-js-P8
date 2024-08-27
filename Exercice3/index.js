const calculateAverage = (array = []) => {
    let sum = 0;
    let count = array.length 

    if (count === 0) {
        return "No numbers to calculate average"
    }

    array.forEach((number) =>
        sum += number
    )

    return sum / count
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
