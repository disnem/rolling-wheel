const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

if (menuButton && navigation) {
  document.documentElement.classList.add('has-js');

  function setMenu(open) {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
}
