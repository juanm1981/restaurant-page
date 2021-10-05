//---------------------------//imports//-------------------------------//
import "./style.css"
import 'bootstrap';
import { homeDiv } from './home.js';
import { menuDiv } from './menu.js';
import { contactDiv } from './contact.js';
import { removeDiv } from './functionalities.js';
import gitLogo from './gbLogo.png'

const container = document.querySelector('#container');
//--------------------------//background//-----------------------------//

//----------------------------//header//-------------------------------//
const header = document.createElement('header');
const homeButton = document.createElement('button');
homeButton.addEventListener('click', () => {
    removeDiv();
    homeDiv();
});
const menuButton = document.createElement('button');
menuButton.addEventListener('click', () => {
    removeDiv();
    menuDiv();
});
const contactButton = document.createElement('button');
contactButton.addEventListener('click', () => {
    removeDiv();
    contactDiv();
});
homeButton.textContent = 'HOME';
menuButton.textContent = 'MENU';
contactButton.textContent = 'CONTACT';
header.appendChild(homeButton);
header.appendChild(menuButton);
header.appendChild(contactButton);
container.appendChild(header);
//------------------------//main-content//-----------------------------//
homeDiv();
//--------------------------//footer//--------------------------------//
const footer = document.createElement('footer');
const link = document.createElement('a');
const gbLogo = document.createElement('img');
gbLogo.classList.add('gitLogo');
gbLogo.src = gitLogo;
link.appendChild(gbLogo);
link.href = "https://github.com/harushishi";
link.target = "_blank";
footer.textContent = 'harushishi         ';
footer.appendChild(link)
container.appendChild(footer);
//----------------------//functionalities//----------------------------//
//                  ->sent to separate module.