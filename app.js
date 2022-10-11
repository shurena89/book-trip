//Variables


let body = document.querySelector('.page');
let openBtn = document.querySelector('#open-btn');
let popup = document.querySelector('#modal-container');
let closeModal = document.querySelector('#btn-close');
let notFinished = document.querySelector('#close-x');

// Changing random bgImages with set interval

let images = ['url(./images/image1.jpg)', 'url(./images/image2.jpg)', 'url(./images/image3.jpg)', 'url(./images/image4.jpg)', 'url(./images/image5.jpg)'];


setInterval(function changeBG(){
    let bg = images[Math.floor(Math.random()*images.length)];
    body.style.backgroundImage = bg;
}
, 4000);

//EventListeners for modal

openBtn.addEventListener('click', function(){
    popup.style.display = 'block';
    
    
})

closeModal.addEventListener('click', function(){
    popup.style.display = 'none';
})

notFinished.addEventListener('click', function(){
    alert("Please fill the form");
})












