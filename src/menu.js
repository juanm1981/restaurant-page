import food1 from './fancyFood1.jpeg'
import food2 from './fancyFood2.jpeg'
import food3 from './fancyFood3.jpeg'

const menuDiv = () => {
    const content = document.createElement('div');
    content.classList.add('content');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    const f1 = document.createElement('img');
    f1.classList.add('gridBox');
    f1.src = food1;
    const a2 = document.createElement('div');
    a2.textContent = "algo sobre la comida";
    a2.classList.add('gridBox');
    const f2 = document.createElement('img');
    f2.src = food2;
    f2.classList.add('gridBox');
    const a4 = document.createElement('div');
    a4.textContent = "algo sobre la comida";
    a4.classList.add('gridBox');
    const f3 = document.createElement('img');
    f3.src = food3;
    f3.classList.add('gridBox');
    const a6 = document.createElement('div');
    a6.textContent = "algo sobre la comida";
    a6.classList.add('gridBox');

    grid.appendChild(f1);
    grid.appendChild(a2);
    grid.appendChild(f2);
    grid.appendChild(a4);
    grid.appendChild(f3);
    grid.appendChild(a6);

    content.appendChild(grid);
    container.appendChild(content);



}

export {
    menuDiv,
};