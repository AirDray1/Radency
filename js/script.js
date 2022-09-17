import data from './data.json' assert {type: 'json'};

console.log(data.map(element => element.name.slice(0,10)));

let burgerMenu = document.querySelector('.fa-bar');
let menu = document.querySelector('.menu');
let burgerBtn = document.querySelector('.dropbtn');

burgerMenu.addEventListener('click', ()=>{
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
        burgerBtn.style.background = 'rgb(44,44,44)';
    } else {
        menu.style.display = 'none';
        burgerBtn.style.background = 'none';
    }
})

document.addEventListener('click', (e) => {
    let click = e.composedPath().includes(menu);
    let click1 = e.composedPath().includes(burgerMenu);
    if(!click && !click1) {
        menu.style.display = 'none';
        burgerBtn.style.background = 'none';
    }
})

function createCategory(array) {
    let sortedArray = array.sort((a, b) => (a.data < b.data) ? 1 : -1)
    let lists = document.querySelector('.lists');
    lists.innerHTML = ``;

    let listAll = document.createElement('div');
    listAll.classList.add('list');
    listAll.classList.add('list__active');
    let spanName = document.createElement('span');
    spanName.classList.add('list__name');
    let spanAmount = document.createElement('span');
    spanAmount.classList.add('list__amount')

    spanName.innerText = `All`;
    spanAmount.innerText = `${sortedArray.map(element => element.content.length).reduce((partialSum, a) => partialSum + a, 0)}`;

    lists.append(listAll);
    listAll.append(spanName);
    listAll.append(spanAmount);

    listAll.addEventListener('click', () => {
        let a = document.getElementsByClassName('list');
        for(let i = 0; i < a.length; i++){
            if(a[i].className == 'list list__active'){
                a[i].classList.remove('list__active');
            }
        }
        listAll.classList.add('list__active');
        createList(sortedArray);            
    })

    let checkArr = []
    sortedArray.map(element => {
        if(checkArr.includes(element.category) == false){
            checkArr.push(element.category);
            let list = document.createElement('div');
            list.classList.add('list');
            let spanName = document.createElement('span');
            spanName.classList.add('list__name');
            let spanAmount = document.createElement('span');
            spanAmount.classList.add('list__amount')

            spanName.innerText = `${element.category}`;
            
            let amount = 0;
            sortedArray.map(elementAm => {
                if(elementAm.category == element.category){
                    amount+=elementAm.content.length;
                }
            })
            spanAmount.innerText = `${amount}`;

            lists.append(list);
            list.append(spanName);
            list.append(spanAmount);
            
            list.addEventListener('click', () => {
                let a = document.getElementsByClassName('list');
                for(let i = 0; i < a.length; i++){
                    if(a[i].className == 'list list__active'){
                        a[i].classList.remove('list__active');
                    }
                }
                list.classList.add('list__active');
                let list__items = document.querySelector('.list__items');   
                list__items.innerHTML = '';

                array.map(el => {
                    if(el.category == element.category){
                        let item = document.createElement('div');
                        item.classList.add('item');
                
                        let item__logo = document.createElement('div');
                        item__logo.classList.add('item__logo');
                        let item__logo__item = document.createElement('div');
                        item__logo__item.classList.add('item__logo__item');
                        item__logo.append(item__logo__item);
                        item__logo__item.innerHTML = `${el.img != undefined ? `<img src=${el.img} width="21px" height="21px">` : el.name.slice(0,2).toUpperCase()}`;
                
                        let item__content = document.createElement('div');
                        item__content.classList.add('item__content');
                        let item__title__block = document.createElement('div');
                        item__title__block.classList.add('item__title__block');
                        let item__title = document.createElement('h2');
                        item__title.classList.add('item__title');
                        item__title.innerText = `${el.name.length < 10 ? el.name : el.name.slice(0,10).concat('...')}`;
                        let item__subtitle = document.createElement('h2');
                        item__subtitle.classList.add('item__subtitle');
                        item__subtitle.innerText = `[${el.category.length < 15 ? el.category : el.category.slice(0,10).concat('...')}]`;
                        let prev__text = document.createElement('p');
                        prev__text.classList.add('prev__text');
                        prev__text.innerText = `${el.content[0].name.length < 20 ? el.content[0].name : el.content[0].name.slice(0,20).concat('...')}`;
                
                        item__content.append(item__title__block);
                            item__title__block.append(item__title);
                            item__title__block.append(item__subtitle);
                        item__content.append(prev__text);
                
                
                
                        let item__info = document.createElement('div');
                        item__info.classList.add('item__info');
                        let item__date = document.createElement('p');
                        item__date.classList.add('item__date');
                        let dateNow = new Date();
                        let data = new Date(`${element.data}`);
                        if((dateNow-data) < 2592000000){
                            item__date.innerText = `${data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
                        }else if((dateNow-data) > 2592000000 && (dateNow-data) < 2592000000*7) {
                            item__date.innerText = `${data.toLocaleString('en-US', {weekday: 'long'}).slice(0,3)}`;
                        }else if((dateNow-data) > 2592000000*7 && (dateNow-data) < 2592000000*365) {
                            item__date.innerText = `${data.toLocaleString('en-US', {day: 'numeric', month: 'short'})}`;
                        }else if((dateNow-data) > 2592000000*365) {
                            item__date.innerText = `${data.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}`;
                        }
                        let list__amount = document.createElement('p');
                        list__amount.classList.add('list__amount');
                        list__amount.innerText = `${element.content.length}`        
                        item__info.append(item__date);
                        item__info.append(list__amount);
                
                        list__items.append(item)
                        item.append(item__logo);
                        item.append(item__content);
                        item.append(item__info);
                
                        item.addEventListener('click', () => {
                            let a = document.getElementsByClassName('item');
                            for(let i = 0; i < a.length; i++){
                                if(a[i].className == 'item item__active'){
                                    a[i].classList.remove('item__active');
                                }
                            }
                            item.classList.add('item__active')            
                        })
                    }
                })         
            })
        }
    })
}

createCategory(data);

function createList(array) {
    let sortedArray = array.sort((a, b) => (a.data < b.data) ? 1 : -1)
    let list__items = document.querySelector('.list__items');
    list__items.innerHTML = '';
    sortedArray.map(element => {
        let item = document.createElement('div');
        item.classList.add('item');

        let item__logo = document.createElement('div');
        item__logo.classList.add('item__logo');
        let item__logo__item = document.createElement('div');
        item__logo__item.classList.add('item__logo__item');
        item__logo.append(item__logo__item);
        item__logo__item.innerHTML = `${element.img != undefined ? `<img src=${element.img} width="21px" height="21px">` : element.name.slice(0,2).toUpperCase()}`;

        let item__content = document.createElement('div');
        item__content.classList.add('item__content');
        let item__title__block = document.createElement('div');
        item__title__block.classList.add('item__title__block');
        let item__title = document.createElement('h2');
        item__title.classList.add('item__title');
        item__title.innerText = `${element.name.length < 10 ? element.name : element.name.slice(0,10).concat('...')}`;
        let item__subtitle = document.createElement('h2');
        item__subtitle.classList.add('item__subtitle');
        item__subtitle.innerText = `[${element.category.length < 15 ? element.category : element.category.slice(0,10).concat('...')}]`;
        let prev__text = document.createElement('p');
        prev__text.classList.add('prev__text');
        prev__text.innerText = `${element.content[0].name.length < 20 ? element.content[0].name : element.content[0].name.slice(0,20).concat('...')}`;

        item__content.append(item__title__block);
            item__title__block.append(item__title);
            item__title__block.append(item__subtitle);
        item__content.append(prev__text);



        let item__info = document.createElement('div');
        item__info.classList.add('item__info');
        let item__date = document.createElement('p');
        item__date.classList.add('item__date');
        let dateNow = new Date();
        let data = new Date(`${element.data}`);
        if((dateNow-data) < 2592000000){
            item__date.innerText = `${data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        }else if((dateNow-data) > 2592000000 && (dateNow-data) < 2592000000*7) {
            item__date.innerText = `${data.toLocaleString('en-US', {weekday: 'long'}).slice(0,3)}`;
        }else if((dateNow-data) > 2592000000*7 && (dateNow-data) < 2592000000*365) {
            item__date.innerText = `${data.toLocaleString('en-US', {day: 'numeric', month: 'short'})}`;
        }else if((dateNow-data) > 2592000000*365) {
            item__date.innerText = `${data.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}`;
        }
        let list__amount = document.createElement('p');
        list__amount.classList.add('list__amount');
        list__amount.innerText = `${element.content.length}`        
        item__info.append(item__date);
        item__info.append(list__amount);

        list__items.append(item)
        item.append(item__logo);
        item.append(item__content);
        item.append(item__info);

        item.addEventListener('click', () => {
            let a = document.getElementsByClassName('item');
            for(let i = 0; i < a.length; i++){
                if(a[i].className == 'item item__active'){
                    a[i].classList.remove('item__active');
                }
            }
            item.classList.add('item__active')            
        })
    })
}

createList(data);