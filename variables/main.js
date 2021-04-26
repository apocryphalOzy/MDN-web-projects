const button = document.querySelector('button');

button.onclick = function () {
    let name = prompt('What is your name mortal?');
    alert(`hello ${name}. nice to meet you.`);
};