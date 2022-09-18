import data from './data.json' assert {type: 'json'};

console.log(data.map(element => element.content));

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
                        let data = new Date(`${el.data}`);
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
                        list__amount.innerText = `${el.content.length}`        
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
                            item.classList.add('item__active');
                            /**---------------------------------------------- **/                            
                            let main = document.querySelector('.main');
                            console.log(main)
                            main.innerHTML = '';
                            let middle__header__wrapper = document.createElement('div');
                            middle__header__wrapper.classList.add('middle-header-wrapper')
                            main.append(middle__header__wrapper);
                            let middle__header = document.createElement('div');
                            middle__header.classList.add('middle-header');

                            let header__logo = document.createElement('div');
                            header__logo.classList.add('header__logo');
                            let header__logo__item = document.createElement('div');
                            header__logo__item.classList.add('header__logo__item');
                            header__logo__item.innerHTML = `${el.img != undefined ? `<img src=${el.img} width="21px" height="21px">` : el.name.slice(0,2).toUpperCase()}`;
                            middle__header__wrapper.append(middle__header);
                            middle__header.append(header__logo);
                            header__logo.append(header__logo__item);

                            let item__content = document.createElement('div');
                            item__content.classList.add('item__content');
                            let item__title__block = document.createElement('div');
                            item__title__block.classList.add('item__title__block');
                            let item__title = document.createElement('h2');
                            item__title.classList.add('item__title');
                            item__title.classList.add('item__title__wrapper');
                            item__title.innerText = `${el.name}`;
                            let item__subtitle = document.createElement('span');
                            item__subtitle.classList.add('item__subtitle');
                            item__subtitle.innerText = `[${el.category}]`;
                            let prev__text = document.createElement('p');
                            prev__text.classList.add('prev__text');
                            let data = new Date(`${el.data}`)
                            prev__text.innerText = `Last changes: ${data.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}`;
                            middle__header.append(item__content);
                            item__content.append(item__title__block);
                            item__title__block.append(item__title);
                            item__title__block.append(item__subtitle);
                            item__content.append(prev__text);

                            let more = document.createElement('div');
                            more.classList.add('more');
                            let more__item = document.createElement('div');
                            more__item.classList.add('more__item');
                            more__item.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                            `;
                            middle__header.append(more);
                            more.append(more__item);
                            
                            let main__content = document.createElement('div');
                            main__content.classList.add('main-content');
                            main.append(main__content);

                            let num = 1;
                            let content = el.content;
                            content.map(item => {
                                let main__content__block = document.createElement('div');
                                main__content__block.classList.add('main__content__block');

                                main__content.append(main__content__block);

                                let main__content__number = document.createElement('div');
                                main__content__number.classList.add('main__content__number');
                                let number = document.createElement('p');
                                number.innerText = `${num}`;
                                num++;
                                main__content__block.append(main__content__number);
                                main__content__number.append(number);

                                let main__content__name = document.createElement('div');
                                main__content__name.classList.add('main__content__name');
                                let name = document.createElement('p');
                                name.innerText = `${item.name}`;
                                main__content__block.append(main__content__name);
                                main__content__name.append(name);

                                let main__content__content = document.createElement('div');
                                main__content__content.classList.add('main__content__content');
                                main__content__block.append(main__content__content);
                                
                                for(let key in item){
                                    if(key != 'name' && key != 'data'){
                                        let block = document.createElement('div');
                                        block.classList.add('main__content__item');
                                        let paragrafTitle = document.createElement('p');
                                        paragrafTitle.classList.add('item__title');
                                        let paragrafSubtitle = document.createElement('p');
                                        paragrafSubtitle.classList.add('item__subtitle');
                                        paragrafTitle.innerText = `${key[0].toUpperCase()}${key.slice(1,(key.length))}`;
                                        paragrafSubtitle.innerText = `${item[key]}`;
                                        
                                        block.append(paragrafTitle);
                                        block.append(paragrafSubtitle);

                                        main__content__content.append(block);
                                    }
                                }
                                let main__content__data = document.createElement('div');
                                main__content__data.classList.add('main__content__data');
                                let data = document.createElement('p');
                                let dataItem = new Date(`${item.data}`)
                                data.innerHTML = `
                                    <p>Created:</p>
                                    <p>${dataItem.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}</p>`;
                                main__content__block.append(main__content__data);
                                main__content__data.append(data);

                                let main__content__tools = document.createElement('div');
                                main__content__tools.innerHTML = `
                                    <ul class="tools__list">
                                        <li class="tools__item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </li>
                                        <li class="tools__item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-archive" viewBox="0 0 16 16">
                                                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                        </li>
                                        <li class="tools__item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </li>
                                    </ul>`;
                                main__content__block.append(main__content__tools);
                            })
                        })

                        let b = document.querySelector('.item__title__wrapper');
                        if(b != null && el.name == b.innerText){
                            item.classList.add('item__active'); 
                        }
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
        let b = document.querySelector('.item__title__wrapper');
        if(b != null && element.name == b.innerText){
            item.classList.add('item__active'); 
        }

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
            item.classList.add('item__active');
            
            let main = document.querySelector('.main');
            main.innerHTML = '';
            let middle__header__wrapper = document.createElement('div');
            middle__header__wrapper.classList.add('middle-header-wrapper')
            main.append(middle__header__wrapper);
            let middle__header = document.createElement('div');
            middle__header.classList.add('middle-header');

            let header__logo = document.createElement('div');
            header__logo.classList.add('header__logo');
            let header__logo__item = document.createElement('div');
            header__logo__item.classList.add('header__logo__item');
            header__logo__item.innerHTML = `${element.img != undefined ? `<img src=${element.img} width="21px" height="21px">` : element.name.slice(0,2).toUpperCase()}`;
            middle__header__wrapper.append(middle__header);
            middle__header.append(header__logo);
            header__logo.append(header__logo__item);

            let item__content = document.createElement('div');
            item__content.classList.add('item__content');
            let item__title__block = document.createElement('div');
            item__title__block.classList.add('item__title__block');
            let item__title = document.createElement('h2');
            item__title.classList.add('item__title');
            item__title.classList.add('item__title__wrapper');
            item__title.innerText = `${element.name}`;
            let item__subtitle = document.createElement('span');
            item__subtitle.classList.add('item__subtitle');
            item__subtitle.innerText = `[${element.category}]`;
            let prev__text = document.createElement('p');
            prev__text.classList.add('prev__text');
            let data = new Date(`${element.data}`)
            prev__text.innerText = `Last changes: ${data.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}`;
            middle__header.append(item__content);
            item__content.append(item__title__block);
            item__title__block.append(item__title);
            item__title__block.append(item__subtitle);
            item__content.append(prev__text);

            let more = document.createElement('div');
            more.classList.add('more');
            let more__item = document.createElement('div');
            more__item.classList.add('more__item');
            more__item.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            `;
            middle__header.append(more);
            more.append(more__item);
            
            let main__content = document.createElement('div');
            main__content.classList.add('main-content');
            main.append(main__content);

            let num = 1;
            let content = element.content;
            content.map(item => {
                let main__content__block = document.createElement('div');
                main__content__block.classList.add('main__content__block');

                main__content.append(main__content__block);

                let main__content__number = document.createElement('div');
                main__content__number.classList.add('main__content__number');
                let number = document.createElement('p');
                number.innerText = `${num}`;
                num++;
                main__content__block.append(main__content__number);
                main__content__number.append(number);

                let main__content__name = document.createElement('div');
                main__content__name.classList.add('main__content__name');
                let name = document.createElement('p');
                name.innerText = `${item.name}`;
                main__content__block.append(main__content__name);
                main__content__name.append(name);

                let main__content__content = document.createElement('div');
                main__content__content.classList.add('main__content__content');
                main__content__block.append(main__content__content);
                
                for(let key in item){
                    if(key != 'name' && key != 'data'){
                        let block = document.createElement('div');
                        block.classList.add('main__content__item');
                        let paragrafTitle = document.createElement('p');
                        paragrafTitle.classList.add('item__title');
                        let paragrafSubtitle = document.createElement('p');
                        paragrafSubtitle.classList.add('item__subtitle');
                        paragrafTitle.innerText = `${key[0].toUpperCase()}${key.slice(1,(key.length))}`;
                        paragrafSubtitle.innerText = `${item[key]}`;
                        
                        block.append(paragrafTitle);
                        block.append(paragrafSubtitle);

                        main__content__content.append(block);
                    }
                }
                let main__content__data = document.createElement('div');
                main__content__data.classList.add('main__content__data');
                let data = document.createElement('p');
                let dataItem = new Date(`${item.data}`)
                data.innerHTML = `
                    <p>Created:</p>
                    <p>${dataItem.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}</p>`;
                main__content__block.append(main__content__data);
                main__content__data.append(data);

                let main__content__tools = document.createElement('div');
                main__content__tools.innerHTML = `
                    <ul class="tools__list">
                        <li class="tools__item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        </li>
                        <li class="tools__item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-archive" viewBox="0 0 16 16">
                                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </li>
                        <li class="tools__item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </li>
                    </ul>`;
                main__content__block.append(main__content__tools);
            })
        })
        /**==============================**/
    })
}

createList(data);