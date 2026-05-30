let changeImage = (e) => {
 
    let imgSrc = e.src;
    imgSrc = imgSrc.replace(/400/g, '800');
    document.querySelector('.image-holder > img').src = imgSrc;
    document.querySelector('.image-thumbnail > img.active').classList.toggle('active');
    e.classList.toggle('active');
 
};

let changeImage2 = (e) => {
 
    let imgSrc = e.src;
    imgSrc = imgSrc.replace(/400/g, '800');
    document.querySelector('.image-holder2 > img').src = imgSrc;
    document.querySelector('.image-thumbnail2 > img.active').classList.toggle('active');
    e.classList.toggle('active');
 
};

let changeImage3 = (e) => {
 
    let imgSrc = e.src;
    imgSrc = imgSrc.replace(/400/g, '800');
    document.querySelector('.image-holder3 > img').src = imgSrc;
    document.querySelector('.image-thumbnail3 > img.active').classList.toggle('active');
    e.classList.toggle('active');
 
};

let changeImage4 = (e) => {
 
    let imgSrc = e.src;
    imgSrc = imgSrc.replace(/400/g, '800');
    document.querySelector('.image-holder4 > img').src = imgSrc;
    document.querySelector('.image-thumbnail4 > img.active').classList.toggle('active');
    e.classList.toggle('active');
 
};

let changeImage5 = (e) => {
 
    let imgSrc = e.src;
    imgSrc = imgSrc.replace(/400/g, '800');
    document.querySelector('.image-holder5 > img').src = imgSrc;
    document.querySelector('.image-thumbnail5 > img.active').classList.toggle('active');
    e.classList.toggle('active');
 
};

let changeImage6 = (e) => {
 
    let imgSrc = e.src;
    imgSrc = imgSrc.replace(/400/g, '800');
    document.querySelector('.image-holder6 > img').src = imgSrc;
    document.querySelector('.image-thumbnail6 > img.active').classList.toggle('active');
    e.classList.toggle('active');
 
};