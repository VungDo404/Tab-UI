const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const content = $$('.content');

$$('.tab').forEach( (value,index) => {
    value.onclick = function (event) {
        $('.tab.active').classList.remove('active');
        $('.content.active').classList.remove('active');
        value.classList.add('active');
        content[index].classList.add('active');
    }
});