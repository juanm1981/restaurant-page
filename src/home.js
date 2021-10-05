import Logo from './logo.png'
const homeDiv = () => {
    const content = document.createElement('div');
    const logoCont = document.createElement('div');


    content.classList.add('content');
    logoCont.classList.add('logo');

    const myLogo = new Image();
    myLogo.src = Logo;
    logoCont.appendChild(myLogo);

    content.appendChild(logoCont);
    container.appendChild(content);
}

export {
    homeDiv,
};