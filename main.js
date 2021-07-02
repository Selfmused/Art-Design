const preloader = document.querySelector(".preloader");
const preloaderDuration = 2600;

const hidePreloader = () => {
    setTimeout(() => {
        preloader.classList.add("hide");
    }, preloaderDuration);
}

window.addEventListener("load", hidePreloader);
