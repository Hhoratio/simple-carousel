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
        // 當 當前圖片的索引位大於圖片長度 - 1 時，回到原點
        (index >=  minImgs.length - 1) ? index = 0: index++;
        ulMax.style.left = `${index * (-100)}%`;
    }, 3000)
};

// 執行 interval
myInter()

// 圖片往左切換圖片按鈕
leftBtn.addEventListener('click', () => {
    ( index == 0 || index == 1 ) ? index = 0: index = 1;
    ulMax.style.left = `${index * (-100)}%`;
    clearInterval(interval);
    myInter();
})

// 圖片往右切換圖片按鈕
rightBtn.addEventListener('click', () => {
    ( index == 1 || index == 2 ) ? index = 2: index++;
    ulMax.style.left = `${index * (-100)}%`;
    clearInterval(interval);
    myInter();
})


// 小圖標切換圖片
minImgs.forEach( item => {
    item.addEventListener('click', () => {
        const imgIndex = [...minImgs].indexOf(item);
        index = imgIndex;
        ulMax.style.left = `${index * (-100)}%`;
        clearInterval(interval);
        myInter();
    })
})
