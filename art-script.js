'use strict';

const art_image_1 = document.querySelector('.art_image_1');
const art_image_2 = document.querySelector('.art_image_2');
const art_image_3 = document.querySelector('.art_image_3');
const art_image_4 = document.querySelector('.art_image_4')
const btn_open_image = document.querySelectorAll('.box');


const open_art_image_1 = () => 
{
    art_image_1.classList.remove('hidden');
    art_image_2.classList.add('hidden');
    art_image_3.classList.add('hidden');
    art_image_4.classList.add('hidden');
}


const open_art_image_2 = () => 
{
    art_image_1.classList.add('hidden');
    art_image_2.classList.remove('hidden');
    art_image_3.classList.add('hidden');
    art_image_4.classList.add('hidden');
}

const open_art_image_3 = () => 
{
    art_image_1.classList.add('hidden');
    art_image_2.classList.add('hidden');
    art_image_3.classList.remove('hidden');
    art_image_4.classList.add('hidden');
}

const open_art_image_4 = () => 
{
    art_image_1.classList.add('hidden');
    art_image_2.classList.add('hidden');
    art_image_3.classList.add('hidden');
    art_image_4.classList.remove('hidden');

}

btn_open_image[0].addEventListener('click',open_art_image_1);
btn_open_image[1].addEventListener('click',open_art_image_2);
btn_open_image[2].addEventListener('click',open_art_image_3);
btn_open_image[3].addEventListener('click',open_art_image_4);


function log (){
    console.log("works");
}
    
for(let i = 0 ; i < btn_open_image.length; i++){

    btn_open_image[i].addEventListener('click',log);
    
}
    
