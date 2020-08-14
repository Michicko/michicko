const navCheckbox = document.querySelector('.navigation__checkbox');
const list = document.querySelector('.navigation__list');
const lis = list.querySelectorAll('.navigation__item');

lis.forEach((li) => {
    li.addEventListener('click', function () {
        lis.forEach((li) => li.firstElementChild.classList.remove('current'));
        li.firstElementChild.classList.add('current');
        navCheckbox.checked = false;
    });
});
