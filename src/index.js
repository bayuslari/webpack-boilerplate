import {Header} from './app/header';
import {Footer} from './app/footer';
import webpackgif from './assets/images/webpack.gif';
// import '../src/style.css';
import './styles/scss/main.scss';

let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);


let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);


// setting the source of img
document.getElementById('webpack-gif').setAttribute('src', webpackgif);