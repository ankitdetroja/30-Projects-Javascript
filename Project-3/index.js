const reviews = [
    {
        id: 0,
        name: "Ankit Detroja",
        designation: 'Full Stack Developer',
        about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore laudantium ratione tempora debitis velit, dicta voluptates exercitationem fuga molestias!",
        img: 'https://secure.img1-fg.wfcdn.com/im/01972548/compr-r85/4120/41208205/-epic-lion-profile-reproduction-de-photo.jpg'
    },
    {
        id: 1,
        name: "Kapil Avaiya",
        designation: 'iOS Developer',
        about: "Vitae tempore laudantium ratione tempora debitis velit, dicta voluptates exercitationem fuga molestias!",
        img: 'https://i.pinimg.com/736x/10/15/d3/1015d3f4497ab0c18ebaeae49c30cbca.jpg'
    },
    {
        id: 2,
        name: "Sanchi Li",
        designation: 'Android Developer',
        about: "Helm lorem sanchi yam tummy.Vitae tempore laudantium ratione tempora debitis velit, dicta voluptates exercitationem fuga molestias!",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHo2ZyyMTK_nsBZhMGUcOoMtI1U083DKd6EUExMH_AqhC0GUACUazaLnxpgfK0ZhB8n0&usqp=CAU'
    }
]

const imgdiv = document.querySelector('.proimg');
const namediv = document.querySelector('.name');
const designationdiv = document.querySelector('.designation');
const aboutdiv = document.querySelector('.about');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const random = document.querySelector('.random');

let count = 0;

document.addEventListener('DOMContentLoaded', function () {
    imgdiv.src = reviews[0].img;
    namediv.innerText = reviews[0].name;
    designationdiv.innerText = reviews[0].designation;
    aboutdiv.innerText = reviews[0].about;
})

next.addEventListener('click', function () {
    count++;
    if (count >= reviews.length) {
        count = 0;
    }
    setdata();
})

prev.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = reviews.length - 1;
    }
    setdata();
})

random.addEventListener('click', function () {
    count = Math.floor(Math.random() * reviews.length);
    setdata();
})

function setdata() {
    imgdiv.src = reviews[count].img;
    namediv.innerText = reviews[count].name;
    designationdiv.innerText = reviews[count].designation;
    aboutdiv.innerText = reviews[count].about;
}