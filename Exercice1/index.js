const pairNumbers = (number1, number2) => {
    let pairNumbersData = [];
    for (let i = number1; i <= number2; i++) {
        if (i % 2 === 0) {
            pairNumbersData.push(i); 
        }        
    }
    return pairNumbersData.join(","); 
};

console.log(pairNumbers(1, 10)); 

export default pairNumbers
