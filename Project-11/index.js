const btns = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.item');
const btnall = document.querySelector('.btns')

btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        btnall.querySelector('.activetab').classList.remove('activetab');
        event.target.classList.add('activetab');

        const btndata = btn.getAttribute('data-target');
        items.forEach(item => {
            if (btndata === item.getAttribute('data-sikar')) {
                item.classList.add('active')
            }
            else {
                item.classList.remove('active');
            }
        })
    });

})