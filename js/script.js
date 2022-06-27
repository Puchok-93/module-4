// Табы

function tabs() {
    const triggers = document.querySelectorAll('.tabheader__item');
    const  tabs = document.querySelectorAll('.tabcontent');
    const triggersParent = document.querySelector('.tabheader-items');


    function hideTabs() {
        tabs.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
            tab.style.display = 'none';
        });

        triggers.forEach( trigger => {
            trigger.classList.remove('tabheader__item--active');
        });
    }

    function showTabs(i = 0) {
        tabs[i].classList.add('show', 'fade');
        tabs[i].classList.remove('hide');
        tabs[i].style.display = 'block'
        triggers[i].classList.add('tabheader__item--active');
    }

    hideTabs();
    showTabs();

    triggersParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            triggers.forEach((item, i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });
}

// Инициализация

tabs();
