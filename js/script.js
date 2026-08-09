
const menu=document.getElementById('menuButton');
const links=document.getElementById('navigationLinks');
if(menu&&links){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}
