const firstLevel = document.querySelector('.first-level');
const secondLevel = document.querySelector('.second-level');
const firstLevelBtn = document.querySelector('.map-triggers__trigger--first');
const secondLevelBtn = document.querySelector('.map-triggers__trigger--second');

const mobFirstLevel = document.querySelector('.cross-hall--first-level');
const mobSecondLevel = document.querySelector('.cross-hall--second-level');
const mobFirstTrigger = document.querySelector('.mob-first-trigger');
const mobSecondTrigger = document.querySelector('.mob-second-trigger');

// Info Controls
const mapInfo = document.querySelector('.map-text-block__info');
const videoInfo = document.querySelector('.content-info--video');
const postersInfo = document.querySelector('.content-info--posters');
const mapTextBlock = document.querySelector('.map-text-block');

const postersTrigger = document.querySelectorAll('.posters-list-triggers__trigger');
const postersTriggerSecondFloor = document.querySelectorAll('.posters-list-triggers__trigger--second-floor')
const videoTriggers = document.querySelectorAll('.video-list-triggers__trigger');

postersTrigger.forEach(poster => {
    poster.addEventListener('click', () => {
        mapInfo.style.display = 'none';
        videoInfo.style.display = 'none';
        postersInfo.style.display = 'block';
    })
});

videoTriggers.forEach(video => {
    video.addEventListener('click', () => {
        mapInfo.style.display = 'none';
        postersInfo.style.display = 'none';
        videoInfo.style.display = 'block';
    })
});

mapTextBlock.addEventListener('click', () => {
    mapInfo.style.display = 'block';
    videoInfo.style.display = 'none';
    postersInfo.style.display = 'none';
})

firstLevelBtn.addEventListener('click', () => {
    firstLevel.style.display = 'block';
    firstLevelBtn.classList.add('is-active');
    secondLevel.style.display = 'none';
    secondLevelBtn.classList.remove('is-active ');
})

secondLevelBtn.addEventListener('click', () => {
    firstLevel.style.display = 'none';
    firstLevelBtn.classList.remove('is-active');
    secondLevel.style.display = 'block';
    secondLevelBtn.classList.add('is-active');

    postersTriggerSecondFloor.forEach(poster => {
        poster.addEventListener('click', () => {
            mapInfo.style.display = 'none';
            videoInfo.style.display = 'none';
            postersInfo.style.display = 'block';
        })
    });
})

mobFirstTrigger.addEventListener('click', () => {
    mobFirstLevel.style.display = 'block';
    mobFirstTrigger.classList.add('is-active');
    mobSecondLevel.style.display = 'none';
    secondLevelBtn.classList.remove('is-active ');
})

mobSecondTrigger.addEventListener('click', () => {
    mobFirstLevel.style.display = 'none';
    mobFirstTrigger.classList.remove('is-active');
    mobSecondLevel.style.display = 'block';
    mobSecondTrigger.classList.add('is-active');
})

// Табы

function tabs() {
    const triggers = document.querySelectorAll('.tabheader__item');
    const  tabs = document.querySelectorAll('.tabcontent');
    const triggersParent = document.querySelector('.tabheader__items');


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
