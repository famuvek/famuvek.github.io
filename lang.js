var language = navigator.language || navigator.browserLanguage; //for IE
if (language.includes ('hu')) {
document.location.href = 'index-hu.html';
} else {
document.location.href = 'index-en.html';
}
