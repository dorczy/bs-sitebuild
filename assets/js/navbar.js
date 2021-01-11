const navbar = document.querySelector('.navbar');

function scrollFn() {
    const bodyScrollTop = document.body.scrollTop;
    const htmlScrollTop = document.documentElement.scrollTop;
    if (bodyScrollTop > 20 || htmlScrollTop > 20) {
        navbar.style.backgroundColor = "var(--white)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
};

window.onscroll = () => { scrollFn() };
