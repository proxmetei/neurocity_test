const url = 'https://reqres.in/api/users';
var page = 1;
var prevBut = null;
async function loadpage(num){
    document.querySelector('.page').innerHTML='';
    const response = await fetch(url+"?page="+num);
    const body = await response.json();
    let users = body.data;
    for(user of users){
        let cont = document.createElement('div');
        cont.classList.add('page__container');
        let img = document.createElement('img');
        img.setAttribute('src', user.avatar);
        let email = document.createElement('span');
        email.textContent = user.email;
        let first_name = document.createElement('span');
        first_name.textContent = user.first_name;
        let last_name = document.createElement('span');
        last_name.textContent = user.last_name;
        cont.appendChild(email);
        cont.appendChild(first_name);
        cont.appendChild(last_name);
        cont.appendChild(img);
        document.querySelector('.page').appendChild(cont);
    }
}
async function dealWithUrl(url){
    const response = await fetch(url);
    const body = await response.json();
    let users = body.data;
    for(user of users){
        let cont = document.createElement('div');
        cont.classList.add('page__container');
        let img = document.createElement('img');
        img.setAttribute('src', user.avatar);
        let email = document.createElement('span');
        email.textContent = user.email;
        let first_name = document.createElement('span');
        first_name.textContent = user.first_name;
        let last_name = document.createElement('span');
        last_name.textContent = user.last_name;
        cont.appendChild(email);
        cont.appendChild(first_name);
        cont.appendChild(last_name);
        cont.appendChild(img);
        document.querySelector('.page').appendChild(cont);
    }
    for(let i=1; i<=body.total_pages;i++){
        let button = document.createElement('button');
        button.setAttribute('id','page'+i)
        button.textContent = i;
        button.addEventListener('click', () => {
            loadpage(i);
            button.disabled = true;
            prevBut.disabled = false;
            prevBut = button;
        })
        document.querySelector('.buttons').appendChild(button);
    }
    prevBut = document.querySelector('#page1');
    prevBut.disabled = true; 
}
dealWithUrl(url);