// Need to make a function that gets rid of preloader

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preload');
    preloader.classList.add('preload-finish');
});