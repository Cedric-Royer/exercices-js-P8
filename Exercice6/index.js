const display = document.getElementById('display');

const appendToDisplay = (symbole) => {
    display.value += symbole
}

const clearDisplay = () => {
    display.value = ''; 
};

const calculateResult = () => {
    try {
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Erreur';
    }
};