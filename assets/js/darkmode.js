// Dark-Light Mode Toggle
var currentTheme = 'light';
// Load User Perference
const userTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if(userTheme){
    document.documentElement.setAttribute('data-theme', userTheme);
    currentTheme = userTheme;
}

function switchTheme(e) {
    if(currentTheme=='dark'){
        document.documentElement.setAttribute('data-theme', 'light');
        currentTheme = 'light';
        localStorage.setItem('theme', 'light'); // Store user perference
    }else{
        document.documentElement.setAttribute('data-theme', 'dark');
        currentTheme = 'dark';
        localStorage.setItem('theme', 'dark'); // Store user perference
    }
}
