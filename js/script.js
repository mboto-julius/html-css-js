'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for(let i=0; i<btnsOpenModel.length; i++ ){
    btnsOpenModel[i].addEventListener('click', openModel);
} 

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click', closeModal); 
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
