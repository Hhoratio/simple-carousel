'use strict'
let ulMax = document.querySelector('.max')
let minImgs = document.querySelectorAll('.min-img')
let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')
let index = 0; // 初始值
let interval; // setInterval()

// 將 interval 封裝出來
function myInter() {
    interval = setInterval(() => {
        (index >=  minImgs.length - 1) ? index = 0: index++;
        ulMax.style.left = `${index * (-100)}%`;
    }, 3000)
};

// 網頁刷新先執行第一次
ulMax.style.left = `${index * (-100)}%`;

// 執行 interval
myInter()
leftBtn.addEventListener('click', () => {
    ( index == 0 || index == 1 ) ? index = 0: index = 1;
    ulMax.style.left = `${index * (-100)}%`;
    clearInterval(interval);
    myInter();
})

rightBtn.addEventListener('click', () => {
    ( index == 1 || index == 2 ) ? index = 2: index++;
    ulMax.style.left = `${index * (-100)}%`;
    clearInterval(interval);
    myInter();
})

