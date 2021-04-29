const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const THEME_KEY = 'theme';
const TOGGLE_KEY = 'toggle';

const refs = {
    toggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
}

const storageTheme = window.localStorage.getItem(THEME_KEY);
const storageToggle = window.localStorage.getItem(TOGGLE_KEY);

refs.body.classList.add(storageTheme);
refs.toggle.checked = storageToggle;

refs.toggle.addEventListener('change', changeThemeInGallery);

function changeThemeInGallery(e) {
    
        
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
        window.localStorage.setItem(THEME_KEY, Theme.DARK);
        window.localStorage.setItem(TOGGLE_KEY, 'true');
       
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        window.localStorage.setItem(THEME_KEY, Theme.LIGHT);
        window.localStorage.removeItem(TOGGLE_KEY);
    }
};

    
    
    



