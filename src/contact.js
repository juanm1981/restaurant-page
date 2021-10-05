const contactDiv = () => {
    const content = document.createElement('div');
    content.classList.add('content');
    const box = document.createElement('div');
    box.classList.add('box');
    const list = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = "Telefono: +54 2222 444888";
    const item2 = document.createElement('li');
    item2.textContent = "Email: emailfalso@gmail.com";
    const item3 = document.createElement('li');
    item3.textContent = "Twitter: @comidapiolita";
    const item4 = document.createElement('li');
    item4.textContent = "Instagram: /comidapiolita";

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);
    list.appendChild(item4);
    box.appendChild(list);
    content.appendChild(box);
    container.appendChild(content);
}

export {
    contactDiv,
};