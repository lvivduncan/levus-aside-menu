{
    // all
    const menu = document.querySelector('.levus-aside-menu');
    // li's
    const lis = menu.querySelectorAll('li');
    // add '.parent' and 'span'
    lis.forEach(li => {
        if (li.children.length > 1) {
            li.className = 'parent';
            // li.innerHTML += '<span></span>';
        }
    });

    const parentsA = document.querySelectorAll('.parent > a');

    parentsA.forEach(parent => {
        parent.insertAdjacentHTML('afterEnd', '<span></span>');
    });






    /* const parents = document.querySelectorAll('.parent');
    
    parents.forEach(parent => parent.addEventListener('click', e => {
        // tmp
        e.preventDefault();

        parents.forEach(parent => {
            parent.classList.remove('open');
            parent.lastElementChild.className = '';
        });

        if (e.target.tagName === 'SPAN') {

            e.target.className = 'open';
            if (e.target.classList.contains('open')) {
                e.target.parentNode.classList.toggle('open');
            }

            // if (flags[i].classList.contains('open')) {
            //     parent.classList.remove('open');
            // } else {
            //     parent.classList.add('open');
            //     flags[i].classList.add('open');
            // }
        }
    })); */






    /* const spans = document.querySelectorAll('.parent span');

    spans.forEach(span => span.addEventListener('click', function(e) {
        e.preventDefault();

        spans.forEach(span => span.parentNode.classList.remove('open'));

        e.stopPropagation();
        this.parentNode.classList.toggle('open');

        this.classList.toggle('open');

    })); */





    const spans = document.querySelectorAll('.parent span');

    spans.forEach(span => {
        span.addEventListener('click', function() {

            spans.forEach(span => span.classList.remove('open'));
            // change class
            this.classList.toggle('open');

        });
    })




    /* menu.addEventListener('click', function(e) {
        // tmp
        e.preventDefault();


        if (e.target.tagName === 'SPAN') {
            // close other .parent ul
            // lis.forEach(li => li.children.length > 1 && (li.classList.remove('open')));

            spans.forEach(span => span.classList.remove('open'));

            // change class
            e.target.classList.toggle('open');

            // if (e.target.classList.contains('open')) {

            //     // setTimeout(() => {

            //     e.target.classList.toggle('open');
            //     // }, 10);
            // }

            // setTimeout(() => {
            //     spans.forEach(span => span.classList.remove('open'));
            // }, 1000);

            // console.log(e.target.parentElement.classList)
            // console.log(e.target.parentElement.classList.value)
        }
    }); */

}