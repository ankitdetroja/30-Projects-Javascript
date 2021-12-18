const btns = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.item');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-target');
        console.log(target);

        items.forEach(item => {
            if (target === item.getAttribute('data-sikar') || target === 'all') {
                item.classList.add('show');
                item.classList.remove('hide');
            }
            else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        })
    })
})