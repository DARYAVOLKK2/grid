const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav__btn');
const navBtnImg = document.querySelector('#nav__btn_img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './pictures/icons/nav-close.svg';
    } else {
        navBtnImg.src = './pictures/icons/nav-open.svg';
    }
}

  AOS.init({
    disable: 'phone',
    once: true
  });
