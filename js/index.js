const initMenu = () => {
  const burgerBtn = document.querySelector('.header_burger');
  const mobileMenu = document.querySelector('.header_mobile_menu');
  const closeBtn = document.querySelector('header_burger_close');

  const openCloseMenu = () => {
    burgerBtn.classList.toggle('active');
    burgerBtn.classList.toggle('header_burger_close');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('body_off-scroll')
  }

  burgerBtn.addEventListener('click', () => {
    openCloseMenu()
  })

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      openCloseMenu()
    })
  }
}

initMenu()