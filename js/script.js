import data from './data.json' assert {type: 'json'};

let archivedArray = data.map(element => {
    return {...element, content: []}
})

let deletedArray = data.map(element => {
    return {...element, content: []}
});

let left__sidebar = document.querySelector('.left__sidebar')
let burgerMenu = document.querySelector('.fa-bar');
let menu = document.querySelector('.menu');
let burgerBtn = document.querySelector('.dropbtn');
let archBtn = document.querySelector('.archive_btn');
let removeBtn = document.querySelector('.remove__btn');
let anchor = document.querySelector('.anchor');
let add__btn = document.querySelector('.add__btn');

let scroll = document.querySelector('.content');

left__sidebar.addEventListener('mouseleave', () => {
    let anchor__block_b = document.querySelector('.achor__block'); 
    anchor__block_b.classList.remove('open');
    anchor__block_b.classList.remove('bubling');
})

archBtn.addEventListener('click', () => viewResults(archivedArray, 'archive'));
removeBtn.addEventListener('click', () => viewResults(deletedArray));
anchor.addEventListener('click', () => {
    let anchor__block = document.getElementsByClassName('achor__block');
    let a = anchor__block[0].className.split(' ');
    a.map(e => {
        if(e == 'open'){
            let anchor__block_b = document.querySelector('.achor__block'); 
            anchor__block_b.classList.remove('open');
            anchor__block_b.classList.remove('bubling');
        } else if(e == 'achor__block'){
            let anchor__block_b = document.querySelector('.achor__block'); 
            anchor__block_b.classList.add('open');
            anchor__block_b.classList.add('bubling');
        }
    })
})

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

add__btn.addEventListener('click', () => {
    let view__fon = document.createElement('div');
    view__fon.classList.add('viewFon');
    let view__block = document.createElement('div');
    view__block.classList.add('viewBlock');
    let items__block = document.createElement('div');
    items__block.classList.add('item__title__block');
    items__block.classList.add('view__title__block');
    let items__block2 = document.createElement('div');
    items__block2.classList.add('item__title__block');
    items__block2.classList.add('view__title__block');  
    let buttonsBlock = document.createElement('div');
    buttonsBlock.classList.add('buttonsBlock');

    let addCategory = document.createElement('div'); 
    addCategory.classList.add('view__btn');
    addCategory.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-envelope-paper" viewBox="0 0 16 16">
        <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
    </svg><span class="view__btn__span">Contionue</span>
    `;

    items__block.innerHTML = `
        <span class="item__title">Enter name:</span>
        <input class="view__input view__category" placeholder="Enter name of new category" name="name">
    `

    items__block2.innerHTML = `
        <span class="item__title">Enter name:</span>
        <input class="view__input view__name" placeholder="Enter name of new content block" name="name">
    `

    document.addEventListener('click', (e) => {
        if(e.target.classList[0] == 'viewFon'){
            body.removeChild(view__fon);
        }
    })

    let body = document.querySelector('body');
    body.append(view__fon);
    view__fon.append(view__block);
    view__block.append(items__block);
    view__block.append(items__block2);

    let itemAtributes = document.createElement('div');
    itemAtributes.classList.add('itemAtributes');
    view__block.append(itemAtributes);

    let view__category = document.querySelector('.view__category');
    let view__name = document.querySelector('.view__name');

    addCategory.addEventListener('click', () => {
        data.push({category: view__category.value, name: view__name.value, data: `${new Date()}`, content: []})
        

        let view__fon = document.createElement('div');
        view__fon.classList.add('viewFon');
        let view__block = document.createElement('div');
        view__block.classList.add('viewBlock');
        let items__block = document.createElement('div');
        items__block.classList.add('item__title__block');
        items__block.classList.add('view__title__block'); 
        let buttonsBlock = document.createElement('div');
        buttonsBlock.classList.add('buttonsBlock');
        let addField = document.createElement('button');
        addField.classList.add('view__btn');
        addField.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg><span class="view__btn__span">Add field</span>
        `;

        let addCategory = document.createElement('div'); 
        addCategory.classList.add('view__btn');
        addCategory.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-envelope-paper" viewBox="0 0 16 16">
            <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
        </svg><span class="view__btn__span">Contionue</span>
        `;

        items__block.innerHTML = `
            <span class="item__title">Enter name:</span>
            <input class="view__input view__name view__item__name" placeholder="Enter name of new category" name="name">
        `

        document.addEventListener('click', (e) => {
            if(e.target.classList[0] == 'viewFon'){
                body.removeChild(view__fon);
            }
        })

        let body = document.querySelector('body');
        body.append(view__fon);
        view__fon.append(view__block);
        view__block.append(items__block);

        let itemAtributes = document.createElement('div');
        itemAtributes.classList.add('itemAtributes');
        view__block.append(itemAtributes);

        view__block.append(buttonsBlock);
        buttonsBlock.append(addField);
        buttonsBlock.append(addCategory);

        let i = 1;

        addField.addEventListener('click', () => {
            let items__block = document.createElement('div');
            items__block.classList.add('item__title__block');
            items__block.classList.add('view__title__block');
            let inputName = document.createElement('input');
            inputName.classList.add('view__input');
            inputName.classList.add('view__input_cat');
            inputName.classList.add('view__name');
            inputName.classList.add(`view__field${i}`);
            inputName.name = 'inputName';
            let inputValue = document.createElement('input');
            inputValue.classList.add('view__input');
            inputValue.classList.add('inputValue');
            inputValue.classList.add(`view__field${i}`);
            i++;
            inputValue.name = 'inputValue';
            itemAtributes.append(items__block);
            items__block.append(inputName);
            items__block.append(inputValue);
        })

        addCategory.addEventListener('click', () => {
            let view__name = document.querySelector('.view__name');
            let view__item__name = document.querySelector('.view__item__name');
            let a = document.getElementsByClassName('view__input_cat');
            let b = document.getElementsByClassName('inputValue');
            let obj = {};
            // console.log(view__name.value);
            Array.from(a).map(e => {
                e.className.split(' ').map(eClass => {
                    Array.from(b).map(el => {
                        el.className.split(' ').map(elClass => {
                            if(eClass == elClass){
                                obj[e.value] = el.value;
                            }
                        })
                    })
                })
            })

            data.map(element => {
                if(element.name == view__name.value){
                    element.content.push({name: view__name.value, data: new Date(), ...obj});
                }
            })
            body.removeChild(view__fon);
            createCategory(data);
            createList(data);
        })
    })

    view__block.append(buttonsBlock);
    buttonsBlock.append(addCategory);
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
    
    function createArrayList(array) {
        let arr = [];
        let arrList = []
        for (let str of array) {
            if (arr.includes(str.category) == false && str.content.length != 0){
                arr.push(str.category);
                arrList.push({category: str.category, arrays: []})
            }
        }
        
        arrList.map(element => {
            array.map(el => {
                if(element.category == el.category){
                    element.arrays.push(el);
                }
            })
        })
        return arrList;
    }

    let arrayLists = createArrayList(sortedArray);

    arrayLists.map(element => {
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
            createList(element.arrays);
            let a = document.getElementsByClassName('list');
            for(let i = 0; i < a.length; i++){
                if(a[i].className == 'list list__active'){
                    a[i].classList.remove('list__active');
                }
            }
            list.classList.add('list__active');
        })
    })
}

createCategory(data);

function createList(array) {
    let sortedArray = array.sort((a, b) => (a.data < b.data) ? 1 : -1)
    let list__items = document.querySelector('.list__items');
    list__items.innerHTML = '';
    sortedArray.map(element => {
        if(element.content.length != 0){
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

            item.addEventListener('click', () => showInfo(array, element, item, true))
        }
    })
}

createList(data);

function showInfo(array, element, item, active){
    if(element.content.length != 0){
        if(active == true){
            let a = document.getElementsByClassName('item item__active');
            for(let i = 0; i < a.length; i++){
                if(a[i].className == 'item item__active'){
                    a[i].classList.remove('item__active');
                }
            }
                item.classList.add('item__active');
        } 
    
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
                let tools__list = document.createElement('ul');
                tools__list.classList.add('tools__list');
                let editBtn = document.createElement('li');
                editBtn.classList.add('tools__item');
                editBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                `
                let archiveBtn = document.createElement('li');
                archiveBtn.classList.add('tools__item');
                archiveBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                        <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                    </svg>
                `
        
                archiveBtn.addEventListener('click', () => {
                    archivedArray.map(elem => {
                        if(element.name == elem.name){
                            elem.content.push(item)
                        }
                    })
                    array.map(elem => {
                        elem.content.map(cont=> {
                            let index = elem.content.indexOf(item);
                            if(index !== -1){
                                elem.content.splice(index, 1);
                            }
                        }) 
                    })
                    createCategory(array);
                    createList(array);
                    showInfo(array, element, item, false);
                })
        
                let deleteBtn = document.createElement('li');
                deleteBtn.classList.add('tools__item');
                deleteBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                `
        
                deleteBtn.addEventListener('click', () => {
                    deletedArray.map(elem => {
                        if(element.name == elem.name){
                            elem.content.push(item)
                        }
                    })
                    array.map(elem => {
                        elem.content.map(cont=> {
                            let index = elem.content.indexOf(item);
                            if(index !== -1){
                                elem.content.splice(index, 1);
                            }
                        }) 
                    })
                    createCategory(array);
                    createList(array);
                    showInfo(array, element, item, false);
                })
        
                editBtn.addEventListener('click', () => {
                    let viewFon = document.createElement('div');
                    viewFon.classList.add('viewFon');
                    let viewBlock = document.createElement('div');
                    viewBlock.classList.add('viewBlock');
        
                    let body = document.querySelector('body');
                    body.append(viewFon);
                    viewFon.append(viewBlock);
                    
                    document.addEventListener('click', (e) => {
                        if(e.target.classList[0] == 'viewFon'){
                            body.removeChild(viewFon);
                        }
                    })
        
                    let keys = Object.keys(item);
                    
                    keys.map(element => {
                        if(element != 'data'){
                            for(let key in item) {
                                if(element == key){   
                                    let block = document.createElement('div');
                                    block.classList.add('item__title__block');
                                    block.classList.add('view__title__block');
                                    let nameSpan = document.createElement('span');
                                    viewBlock.append(nameSpan);
                                    let input = document.createElement('input');
                                    input.name = `${element}`;
                                    input.classList.add('view__input');
                                    input.classList.add('edit__input');
                                    nameSpan.innerText = `${element[0].toLocaleUpperCase()}${element.slice(1)}`;
                                    input.value = `${item[key]}`;
                                    viewBlock.append(block);
                                    block.append(nameSpan);
                                    block.append(input);
                                }
                            }
                        } else {
                            for(let key in item) {
                                if(element == key){   
                                    let block = document.createElement('div');
                                    block.classList.add('item__title__block');
                                    block.classList.add('view__title__block');
                                    let nameSpan = document.createElement('span');
                                    viewBlock.append(nameSpan);
                                    let input = document.createElement('span');
                                    input.classList.add('edit__input');
                                    input.name = `${element}`;
                                    nameSpan.innerText = `${element[0].toLocaleUpperCase()}${element.slice(1)}`;
                                    input.innerText = `${item[key]}`;
                                    viewBlock.append(block);
                                    block.append(nameSpan);
                                    block.append(input);
                                }
                            }
                        }
                    })
        
                    let buttonsBlock = document.createElement('div');
                    buttonsBlock.classList.add('buttonsBlock');
                    viewBlock.append(buttonsBlock);
                    let clearBtn = document.createElement('button');
                    clearBtn.classList.add('view__btn');
                    let createBtn = document.createElement('button');
                    createBtn.classList.add('view__btn');
                    clearBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                    <span class="view__btn__span">Clear</span>
                    `
                    createBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                    <span class="view__btn__span">Edit</span>
                    `
                    buttonsBlock.append(clearBtn);
                    buttonsBlock.append(createBtn);
        
                    createBtn.addEventListener('click', () => {
                        let new__item = document.getElementsByClassName('edit__input');
        
                        let values = [];
                        for(let i = 0; i < new__item.length; i++){
                            values.push(new__item[i].value);
                        }
                        
                        const obj = keys.reduce((accumulator, element, index) => {
                            if(element != 'data'){
                                return {...accumulator, [element]: values[index]};
                            } else {
                                return {...accumulator, 'data': new Date};
                            }
                        }, {});
        
                        array.map(elem => {
                            elem.content.map(cont=> {
                                let index = elem.content.indexOf(item);
                                if(index !== -1){
                                    elem.content.splice(index, 1);
                                    elem.content.push(obj);
                                }
                            }) 
                        })
        
                        createCategory(array);
                        createList(array);
                        showInfo(array, element, item, false);
                        body.removeChild(viewFon);
                    })
                })
        
                main__content__block.append(main__content__tools);
                main__content__tools.append(tools__list);
                tools__list.append(editBtn);
                tools__list.append(archiveBtn);
                tools__list.append(deleteBtn);   
        })
    
        let main__input = document.createElement('div');
        main__input.classList.add('main-input');
        let main__input__input = document.createElement('input');
        main__input__input.classList.add('main__input__input');
        main__input__input.placeholder = 'Add task';
        let main__input__btn = document.createElement('button');
        main__input__btn.classList.add('main__input__btn');
        main__input__btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#D3D3D3" class="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        `;
    
        main.append(main__input);
        main__input.append(main__input__input);
        main__input.append(main__input__btn);
    
        main__input__btn.addEventListener('click', () => {
            let keys = []
            let keysAll = []
            element.content.map(element => {
                let keysArray = Object.keys(element);
                keysArray.map(key => {
                    if(keys.includes(key) == false && key != 'name' && key != 'data'){
                        keys.push(key);
                    }
                    if(keysAll.includes(key) == false){
                        keysAll.push(key);
                    }
                })
            })
            if(keys.length >= 1){
                let viewFon = document.createElement('div');
                viewFon.classList.add('viewFon');
                let viewBlock = document.createElement('div');
                viewBlock.classList.add('viewBlock');
    
                let body = document.querySelector('body');
                body.append(viewFon);
                viewFon.append(viewBlock);
                
                document.addEventListener('click', (e) => {
                    if(e.target.classList[0] == 'viewFon'){
                        body.removeChild(viewFon);
                    }
                })
                
                let nameSpan = document.createElement('span');
                nameSpan.innerText = `Name: ${main__input__input.value}`;
                viewBlock.append(nameSpan);
    
                keys.map(key => {
                    let div = document.createElement('div');
                    div.classList.add('item__title__block');
                    div.classList.add('view__title__block');
                    let span = document.createElement('span');
                    span.classList.add('item__title');
                    span.innerText = `${key[0].toUpperCase()}${key.slice(1,key.length)}:`;
                    let input = document.createElement('input');
                    input.classList.add('view__input');
                    
                    input.placeholder = `Enter ${key}`;
                    input.name = `${key}`;
                    viewBlock.append(div);
                    div.append(span);
                    div.append(input);
                })
    
                let buttonsBlock = document.createElement('div');
                buttonsBlock.classList.add('buttonsBlock');
                viewBlock.append(buttonsBlock);
                let clearBtn = document.createElement('button');
                clearBtn.classList.add('view__btn');
                let createBtn = document.createElement('button');
                createBtn.classList.add('view__btn');
                clearBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
                <span class="view__btn__span">Clear</span>
                `
                createBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
                <span class="view__btn__span">Create</span>
                `
                buttonsBlock.append(clearBtn);
                buttonsBlock.append(createBtn);
    
                createBtn.addEventListener('click', () => {
                    let a = document.getElementsByClassName('view__input');
                    let name = main__input__input.value;
                    let date = new Date();
                    element.data = date;
                    let values = [name, date];
                    for(let i = 0; i < a.length; i++){
                        values.push(a[i].value);
                    }
                    const obj = keysAll.reduce((accumulator, element, index) => {
                        return {...accumulator, [element]: values[index]};
                    }, {});
    
                    element.content.push(obj);
                    createCategory(array);
                    createList(array);
                    showInfo(array, element, item, false);
                    body.removeChild(viewFon);
                })
            } else {
                let a = document.getElementsByClassName('view__input');
                let name = main__input__input.value;
                let date = new Date();
                element.data = date;
                let values = [name, date];
                for(let i = 0; i < a.length; i++){
                    values.push(a[i].value);
                }
                const obj = keysAll.reduce((accumulator, element, index) => {
                    return {...accumulator, [element]: values[index]};
                }, {});
    
                element.content.push(obj);
                createCategory(array);
                createList(array);
                showInfo(array, element, item, false);
            }
        })
    } else {
        let main = document.querySelector('.main');
        main.innerHTML = '';
    }
}

function viewResults(array, arrayType){
    let viewFon = document.createElement('div');
    viewFon.classList.add('viewFon');
    let viewBlock = document.createElement('div');
    viewBlock.classList.add('viewBlock');

    let body = document.querySelector('body');
    body.append(viewFon);
    viewFon.append(viewBlock);
    
    document.addEventListener('click', (e) => {
        if(e.target.classList[0] == 'viewFon'){
            body.removeChild(viewFon);
        }
    })

    array.map(element => {
        if(element.content.length != 0){
            let div = document.createElement('div');
            let details = document.createElement('details');
            details.classList.add('view__details');
            let summary = document.createElement('summary');
            summary.classList.add('view__summary');
            let p = document.createElement('p');

            let item__title__block = document.createElement('div');
            item__title__block.classList.add('item__title__block');
            let item__title = document.createElement('h2');
            item__title.classList.add('item__title');
            item__title.classList.add('item__title__wrapper');
            item__title.innerText = `${element.name}`;
            let item__subtitle = document.createElement('span');
            item__subtitle.classList.add('item__subtitle');
            item__subtitle.innerText = `[${element.category}]`;

            viewBlock.append(div);
            div.append(details);
            details.append(summary);
            summary.append(item__title__block);
            item__title__block.append(item__title);
            item__title__block.append(item__subtitle);

            let num = 1;
            element.content.map(item => {
                let main__content__block = document.createElement('div');
                main__content__block.classList.add('main__content__block');
                
                details.append(p);
                p.append(main__content__block);
        
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
                let date = document.createElement('p');
                let dataItem = new Date(`${item.data}`)
                date.innerHTML = `
                    <p>Created:</p>
                    <p>${dataItem.toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}</p>`;
                main__content__block.append(main__content__data);
                main__content__data.append(date);
        
                let main__content__tools = document.createElement('div');
                if(arrayType == 'archive'){
                    let tools__list = document.createElement('ul');
                    tools__list.classList.add('tools__list');
                    
                    let archiveBtn = document.createElement('li');
                    archiveBtn.classList.add('tools__item');
                    archiveBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D3D3D3" class="bi bi-journal-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                    `
            
                    archiveBtn.addEventListener('click', () => {
                        data.map(dataEl => {
                            if(dataEl.name == element.name){
                                dataEl.content.push(item);
                            }
                        })
                        let main = document.querySelector('.main');
                        main.innerHTML = ``;
                        
                        archivedArray.map(elem => {
                            elem.content.map(cont=> {
                                let index = elem.content.indexOf(item);
                                if(index !== -1){
                                    elem.content.splice(index, 1);
                                }
                            }) 
                        })
                        body.removeChild(viewFon);
                        viewResults(archivedArray);
                        createCategory(data);
                        createList(data);
                    })
                    main__content__tools.append(tools__list);
                    tools__list.append(archiveBtn);                    
                }
        
                main__content__block.append(main__content__tools);
                
        })
        }
    })
    if(viewBlock.innerHTML == ``){
        let p = document.createElement('p');
        p.innerText = `Sorry, but you haven\`t add any item`;
        viewBlock.append(p);
    }
}