const burger = document.querySelector('.menu');
let toogle = true;

burger.addEventListener('click',() => {
  if(toogle){
    burger.classList.add('open');
    toogle= false;
  }
  else{
    burger.classList.remove('open');
    toogle= true;
  }
});