const que = document.querySelector('.que');
const icon = document.querySelectorAll('.icon');

icon.forEach(Element => {
    Element.addEventListener('click', (el) => {
        Element.parentElement.parentElement.classList.toggle('height');

        if (Element.getAttribute('name') == 'remove') {
            Element.setAttribute('name', 'add');
        } else if (Element.getAttribute('name') == 'add') {
            Element.setAttribute('name', 'remove');
        }
    })
})