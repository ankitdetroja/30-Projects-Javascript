const input = document.querySelector('input');
const button = document.querySelector('button');
const editicn = document.querySelector('.edit');
const deleteicn = document.querySelector('.delete');
const message = document.querySelector('.messagepopup');
const ul = document.querySelector('ul');
let edit = false;
let cid = 0;
let id;
button.addEventListener('click', additem);

function additem() {
    if (input.value === '') {
        msgpopup('emptyvalue')

    } else if (!edit) {
        edit = false;
        cid++;
        const item = document.createElement('li');
        const textspan = document.createElement('span');
        const icndiv = document.createElement('div');
        const icn1 = document.createElement('ion-icon')
        icn1.setAttribute('name', 'create-outline');
        icn1.classList.add('edit')
        const icn2 = document.createElement('ion-icon')
        icn2.setAttribute('name', 'trash-outline');
        icn2.classList.add('delete')
        icndiv.appendChild(icn1);
        icndiv.appendChild(icn2);
        item.appendChild(textspan)
        item.setAttribute('data-cid', cid);
        item.appendChild(icndiv);
        ul.appendChild(item)

        textspan.innerText = input.value;

        msgpopup('itemadded');

        icn1.addEventListener('click', edititem);
        icn2.addEventListener('click', deleteitem);

        input.value = '';
    }
    else if (edit) {
        console.log(id);
        let all = document.querySelectorAll('li');
        all.forEach(el => {
            if (el.getAttribute('data-cid') == id) {
                el.firstElementChild.innerText = input.value;
                edit = false
                input.value = '';
                msgpopup('itemedited');
            }
        })
    }
}

function msgpopup(item) {
    message.classList.remove('hide');
    if (item === 'emptyvalue') {
        message.innerText = 'Please Enter Item';
        message.style.background = '#f8a5a5';
    }
    else if (item === 'itemadded') {
        message.innerText = 'Item Added to the list';
        message.style.background = '#86d786';
    } else if (item === 'itemdeleted') {
        message.innerText = 'Item Deleted'
        message.style.background = '#f8a5a5';
    } else if (item === 'itemedited') {
        message.innerText = 'Item Edited';
        message.style.background = '#ffd59c';
    }
    setTimeout(() => {
        message.classList.add('hide');
    }, 2000);
}

function edititem(element) {
    input.value = element.target.parentNode.parentNode.firstElementChild.innerText;
    edit = true;
    id = element.target.parentNode.parentNode.getAttribute('data-cid');
}

function deleteitem(element) {
    element.target.parentNode.parentNode.remove();
    msgpopup('itemdeleted');
}

function setdefault() {
    input.value = '';
    edit = false;
    button.addEventListener('click', additem);
}