'use strict';

//initialization
function createAreaForGame() {
    const COLNUMBER = 8;
    const area = [];
    let counterBlack = 1;
    let counterId = 0;

    for (let row = 0; row < COLNUMBER; row++) {
        const res = [];

        for (let col = 0; col < COLNUMBER; col++, counterId++) {
            if ((col + counterBlack) % 2 === 0){
                const element = document.createElement('div');
                element.className = 'col black';
                element.id = `${row}, ${col}`;

                res.push(element);
            }else {
                const element = document.createElement('div');
                element.className = 'col white';
                element.id = `${row}, ${col}`;

                res.push(element);
            }
        }

        counterBlack++;
        area.push(res);
    }

    return area;
}


function drawArea(area) {
    const baza = document.getElementById('baza');

    for (const row of area) {
        const baza_row = document.createElement('div');
        baza_row.id = 'row';

        for(const col of row) {
            baza_row.append(col);
        }

        baza.append(baza_row);
    }
}


function createChestsFirstPlayer() {
    const CHEST_NUMBER = 12;
    let chests = 0

    const arrChests = [];

    let row = 0;
    let col = 0
    while (chests < CHEST_NUMBER) {
        const elem = document.getElementById(`${row}, ${col}`);

        if (elem.className === 'col black') {
            const chest = document.createElement('div');
            chest.className = 'chest chestGreen';
            chest.row = row;
            chest.col = col;
            chest.addEventListener('click', () => {
                chestActive(chest, arrChests);
                checkAvaliable(chest, arrChests);
            });

            elem.append(chest);
            arrChests.push(chest);

            chests++;
        }

        col++;
        if (col === 8) {
            row++;
            col = 0;
        }
    }
}


function createChestsSecondPlayer() {
    const CHEST_NUMBER = 12;
    let chests = 0

    let row = 7;
    let col = 0
    while (chests < CHEST_NUMBER) {
        const elem = document.getElementById(`${row}, ${col}`);

        if (elem.className === 'col black') {
            const chest = document.createElement('div');
            chest.className = 'chest chestRed';
            chest.addEventListener('click', () => chest.classList.toggle('active'));

            elem.append(chest);
            chests++;
        }

        col++;
        if (col === 8) {
            row--;
            col = 0;
        }
    }
}


function chestActive(chest, arrChest) {
    for (const anotherChest of arrChest) {
        if (anotherChest !== chest) {
            anotherChest.classList.remove('active');
        }
    }
    chest.classList.toggle('active');
}


function checkAvaliable(chest) {
    try {
        // console.log(chest.row, chest.col);
        const firstMove = document.getElementById(`${chest.row + 1}, ${chest.col - 1}`);
        const secondMove = document.getElementById(`${chest.row + 1}, ${chest.col + 1}`);

        for (const col of area.flat()) {
            col.classList.remove('avaliable');
        }

        if (firstMove.innerHTML === '' && chest.className.includes('active')) {
            firstMove.classList.add('avaliable');
        }

        if (secondMove.innerHTML === '' && chest.className.includes('active')) {
            secondMove.classList.add('avaliable');
        }
    }
    catch (e) {

    }
}


const area = createAreaForGame();
// console.log(area);
drawArea(area);
createChestsFirstPlayer(area);
createChestsSecondPlayer(area);
// createChest(10);