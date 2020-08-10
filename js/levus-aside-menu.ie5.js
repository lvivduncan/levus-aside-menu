// 10-08-2020
"use strict";

{
    var menu = document.querySelector('.levus-aside-menu'); // li's

    var lis = menu.querySelectorAll('li'); // add '.parent'

    lis.forEach(function(li) {
        if (li.children.length > 1) {
            li.className = 'parent';
        }
    }); // add 'span'

    document.querySelectorAll('.parent > a').forEach(function(parent) {
        parent.insertAdjacentHTML('afterEnd', '<span></span>');
    });
    var spans = document.querySelectorAll('.parent span');
    spans.forEach(function(span) {
        span.addEventListener('click', function() {
            // check
            var is_open = this.classList.contains('open'); // toggle other 

            spans.forEach(function(span) {
                return span.classList.remove('open');
            }); // change class

            if (is_open) {
                this.classList.remove('open');
            } else {
                this.classList.add('open');
            }
        });
    });
}