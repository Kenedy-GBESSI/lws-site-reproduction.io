/*Pour la gestion de hamburger button*/
var humburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var formenu = document.querySelector('.formenu');
humburger.addEventListener('click',(e)=>{
    humburger.classList.toggle('active');
    formenu.classList.toggle('change');
    menu.classList.contains('d-none') ? menu.classList.replace('d-none','is-display') : menu.classList.replace('is-display','d-none');
});
/*Pour la gestion du selector de la barre de navigation*/
const indicator = document.querySelector('.selector');
const items = document.querySelectorAll('.link');
const ul = document.querySelector('nav');
const contains = document.querySelectorAll('.sous-menus');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.backgroundColor='black';
  indicator.style.left = `${el.offsetLeft}px`;
  
  
  el.classList.add('is-active');
}

items.forEach((item) => {
  item.addEventListener('mouseover', e => {
    handleIndicator(e.target);
  });
});

formenu.addEventListener('mouseover',e=>{
  contains.forEach(item =>{
    item.classList.remove('menu-playeur');
  });
  document.querySelector('.'+e.target.dataset.menu).classList.toggle('menu-playeur');
})

const replaceLinks = document.querySelectorAll(".link-replace");
replaceLinks.forEach(item=>{
  item.addEventListener('click',e=>{
    e.target.classList.toggle('is-rotate');
  });
})
var table = document.querySelector('.tab2');
var chevron = document.querySelector(".chevron-wrapper2");
document.querySelector(".chevron-wrapper").addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.chevron').classList.toggle("rotate");
    table.style.transition = "all 1s ease-in-out";
    table.classList.contains('d-none') ? table.classList.replace('d-none','d-block') : table.classList.replace('d-block','d-none');
});
document.querySelector(".chevron-wrapper2").addEventListener('click',e=>{
  e.preventDefault();
  document.querySelector('.chevron2').classList.toggle("rotate");
  table.style.transition = "all 1s ease-in-out";
  table.classList.contains('d-none') ? table.classList.replace('d-none','d-block') : table.classList.replace('d-block','d-none');
});
document.querySelectorAll(".check").forEach(element => {
  element.addEventListener('click',e=>{
    document.querySelectorAll(".check").forEach(item=>{
      item.classList.remove('active');
    });
    document.querySelectorAll('.slideV').forEach(i=>{
      i.style.display = 'none';
    })
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("active");
    document.querySelector("."+e.target.dataset.target).style.display="flex";
  })
});
const header = document.querySelector('header');
window.addEventListener('scroll',()=>{
     if(window.scrollY >1800 && document.documentElement.scrollWidth > 992){
        header.style.display = 'none';
        document.querySelector('.header2').style.display = 'block';
     }else{
      header.style.display = 'block';
      document.querySelector('.header2').style.display = 'none';
     }
});
const el = document.querySelector('.top-link');
window.addEventListener('scroll', ()=>{
     if(window.scrollY > 500){
        el.style.display = 'block'
     }else{
       el.style.display = 'none';
     }
});
el.addEventListener('click', (e)=>{
  e.preventDefault();
  e.stopPropagation();
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth"
   });
})