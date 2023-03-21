(() => {
    const openButton = document.querySelector('.nav__menu');
    const showMenu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        // alert('Me has cliqueado!')
        showMenu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        showMenu.classList.remove('nav__link--show');
    });
    // usamos 'add' y 'remove' en lugar de 'toggle' porque si existe la quita
    // y si no, la vá a crear. Al existir 2 botones diferentes no tenemos que
    // usarla.
})();