// 10-08-2020
"use strict"; {

    var menu = document.querySelector('.levus-aside-menu');

    var lis = menu.querySelectorAll('li');

    lis.forEach(function(li) {
        if (li.children.length > 1) {
            li.className = 'parent';
        }
    });

    document.querySelectorAll('.parent > a').forEach(function(parent) {
        parent.insertAdjacentHTML('afterEnd', '<span></span>');
    });

    var spans = document.querySelectorAll('.parent span');

    spans.forEach(function(span) {
        span.addEventListener('click', function() {

            var is_open = this.classList.contains('open');

            spans.forEach(function(span) {
                return span.classList.toggle('class');
            });

            if (is_open) {
                this.classList.remove('open');
            } else {
                this.classList.add('open');
            }
        });
    });
}