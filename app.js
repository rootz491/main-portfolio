const navBtns = document.getElementsByClassName('navBtn');
const menuBtn = document.querySelector('#menu');

// navBtns.forEach(btn => {
for (const btn of navBtns) {
    btn.onclick = _ => {
        console.log('hello')
        menuBtn.checked = false;
    }
};