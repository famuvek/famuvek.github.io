var language = navigator.language || navigator.browserLanguage; //for IE
if (language.indexOf('en') > -1) {

document.location.href = 'index-en.html';
} else {
document.location.href = 'index.html';
}