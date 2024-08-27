const myButton = document.getElementById('myButton')

const printMessage = () => {
    const message = `Bonjour, vous avez cliqué sur le bouton !`;
    const paragraph = document.createElement('p');
    paragraph.innerText = message;
    myButton.insertAdjacentElement('afterend', paragraph);
}

myButton.addEventListener("click", printMessage)