// Write your JS Project  here.
window.addEventListener('scroll',function (){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});
function barMenu(){
    const Menubar = document.querySelector('.bar');
    const navi = document.querySelector('.navs');
    Menubar.classList.toggle('active');
    navi.classList.toggle('active');
}