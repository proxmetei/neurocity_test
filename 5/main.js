var finish = true;
var t = null;
var openIndex = [];
function debounce(func, timeout = 5000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        t = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
const min = 10, max = 100;
let elements = [];
let n = Math.floor(Math.random() * (max - min) + min);
const container = document.querySelector('.container');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (let i = 0; i < n; i++) {
    let elem = document.createElement('div');
    elem.classList.add('container__elem');
    elem.style.backgroundColor = getRandomColor();
    container.appendChild(elem);
    elements.push(elem);
}
document.querySelector('.mybutton').addEventListener('click', () => {
    if (!finish) {
        clearTimeout(t);
            for (let i = 0; i < 3 && openIndex.length!=0; i++) {
                let i = Math.floor(Math.random() * (openIndex.length - 1));
                console.log(openIndex.length, i);
                elements[openIndex[i]].classList.remove('display');
                openIndex.splice(i,1)
            }
            finish=!finish;
    }
    else {
        finish = false;
        let func = debounce(() => {
            for (let i = 0; i < 3; i++) {
                let i = Math.floor(Math.random() * (n-1));
                openIndex.push(i);
                elements[i].classList.add('display');
            }
            finish = true;
        }, 1000);
        func();
    }
})

