const min = 10, max = 100;
let n = Math.floor( Math.random() * (max - min) + min);
const container = document.querySelector('.container');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for(let i=0;i<n;i++){
    let elem = document.createElement('div');
    elem.classList.add('container__elem');
    elem.style.backgroundColor = getRandomColor();
    container.appendChild(elem);
} 
