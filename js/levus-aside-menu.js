// all
const menu = document.querySelector('.levus-aside-menu');
// li's
const lis = menu.querySelectorAll('li');
// add '.parent' and 'span'
lis.forEach(li => {
    if (li.children.length > 1) {
        li.className = 'parent';
        li.innerHTML += '<span></span>';
    }
});

menu.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === 'SPAN') {
        // close other .parent ul
        lis.forEach(li => {
            if (li.children.length > 1) {
                li.className = 'parent';
                // li.innerHTML += '<span class="close"></span>';
            }
        });
        // change class to span
        // e.target.classList.toggle('open');
        e.target.parentNode.classList.toggle('open');
    }
});
// console.log(menu)