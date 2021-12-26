const icn = document.querySelectorAll('ion-icon');
const btn = document.querySelector('button');
const api = "https://randomuser.me/api/";

document.addEventListener('DOMContentLoaded', function () {
    getdata()
})


btn.addEventListener('click', function () {
    getdata();
})


async function getdata() {
    const res = await fetch(api);
    const data = await res.json();
    const person = data.results[0];
    const { picture: { large } } = person;
    const { name: { first, last } } = person;
    const { email } = person;
    const { dob: { age } } = person;
    const { location: { street: { name } } } = person;
    const { phone } = person;
    const { login: { password } } = person;

    const fdata = ({ large, fname: `${first} ${last}`, email, age, name, phone, password });
    console.log(fdata);
    document.querySelector('.icnlist').querySelector('.active').classList.remove('active');
    document.querySelector('ion-icon').classList.add('active');

    document.querySelector('.user-value').innerText = `${fdata.fname}`;
    document.querySelector('img').src = `${large}`;
    icn.forEach(item => {
        item.addEventListener('click', function (e) {
            document.querySelector('.icnlist').querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            settitle(e.target, fdata);
        });
    });


}

function settitle(clslist, data) {
    if (clslist.classList.contains('email')) {
        document.querySelector('.user-title').innerText = 'My email is';
        document.querySelector('.user-value').innerText = `${data.email} `;
    } else if (clslist.classList.contains('age')) {
        document.querySelector('.user-title').innerText = 'My age is';
        document.querySelector('.user-value').innerText = `${data.age} `;
    } else if (clslist.classList.contains('location')) {
        document.querySelector('.user-title').innerText = 'My street is';
        document.querySelector('.user-value').innerText = `${data.name} `;
    } else if (clslist.classList.contains('phone')) {
        document.querySelector('.user-title').innerText = 'My phone is';
        document.querySelector('.user-value').innerText = `${data.phone} `;
    } else if (clslist.classList.contains('password')) {
        document.querySelector('.user-title').innerText = 'My password is';
        document.querySelector('.user-value').innerText = `${data.password} `;
    } else {
        document.querySelector('.user-title').innerText = 'My name is';
        document.querySelector('.user-value').innerText = `${data.fname} `;
    }
}