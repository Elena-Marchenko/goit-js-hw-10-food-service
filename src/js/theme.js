const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';
const TOGGLE_KEY = 'toggle';

const refs = {
    toggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};

const storageTheme = localStorage.getItem(THEME_KEY);


refs.toggle.addEventListener('change', changeThemeInGallery);

onStorageThemeDark();
onStorageThemeLight();

function changeThemeInGallery(e) {
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem(THEME_KEY, Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);

    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        localStorage.setItem(THEME_KEY, Theme.LIGHT);
        
    }
};

function onStorageThemeDark() {
    if (storageTheme === Theme.DARK) {
        refs.toggle.checked = storageTheme;
    } 
};

function onStorageThemeLight() {
    if (!storageTheme) {
        refs.body.classList.add(Theme.LIGHT);
        
    } else {
        refs.body.classList.add(storageTheme);
    } 
};
 

    



