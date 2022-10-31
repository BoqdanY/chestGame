'use strict';

//initialization
function createAreaForGame() {
    const COLNUMBER = 8;
    let area = [];
    let counterBlack = 1;
    let counterId = 0;

    for (let row = 0; row < COLNUMBER; row++) {
        let res = [];

        for (let col = 0; col < COLNUMBER; col++, counterId++) {
            if ((col + counterBlack) % 2 === 0){

                res.push({
                    // positionX: row,
                    // positionY: col,
                    id: counterId,
                    content: `<div id="${counterId}" class="black col"></div>`//${counterId}
                });
            }else {

                res.push({
                    // positionX: row,
                    // positionY: col,
                    id: counterId,
                    content: `<div id="${counterId}" class="white col"></div>`//${counterId}
                    
                });
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
        let res = '';

        for(const col of row) {
            res += col.content;
        }

        baza.innerHTML += `<div id="row">${res}</div>`;
    }
}

// function createChest(id, previousElement = undefined) {
//     if (previousElement !== undefined) {
//         previousElement.remove();
//     }
//
//     const chest = document.createElement('div');
//     chest.className = 'chestRed';
//     chest.id = id;
//     chest.addEventListener('click', () => checkAvaliableCol(chest));
//
//     document.getElementById(`${chest.id}`).append(chest);
// }

function createChestsFirstPlayer(area) {
    const CHEST_NUMBER = 12;

    let startFromElementOfRow = 1;
    let rowNumber = 0;
    let chests = 0
    // console.log(area);

    for (const row of area) {
        // console.log(startFromElementOfRow);

        let startFromElementOfCol = startFromElementOfRow;

        for (const col of row) {
            console.log(chests);
            if (col.id === startFromElementOfCol + rowNumber && chests < CHEST_NUMBER) {
                const chest = document.createElement('div');
                chest.className = 'chest chestGreen';
                chest.addEventListener('click', () => chest.classList.toggle('shadow'));
                document.getElementById(col.id).append(chest);
                startFromElementOfCol += 2;
                chests++;
            }
        }
        startFromElementOfRow = (startFromElementOfRow === 1) ? 0 : 1;
        rowNumber += 8;
    }
}


function createChestsSecondPlayer(area) {
    const CHEST_NUMBER = 12;

    let startFromElementOfRow = 0;
    let rowNumber = 56;
    let chests = 0
    // console.log(area);

    for (const row of area.reverse()) {
        // console.log(startFromElementOfRow);

        let startFromElementOfCol = startFromElementOfRow;

        for (const col of row) {
            console.log(chests);
            if (col.id === startFromElementOfCol + rowNumber && chests < CHEST_NUMBER) {
                const chest = document.createElement('div');
                chest.className = 'chest chestRed';
                chest.addEventListener('click', () => chest.classList.toggle('shadow'));
                document.getElementById(col.id).append(chest);
                startFromElementOfCol += 2;
                chests++;
            }
        }
        startFromElementOfRow = (startFromElementOfRow === 1) ? 0 : 1;
        rowNumber -= 8;
    }
}


// function checkAvaliableCol(elem) {
//     const FIRSTMOVE = +elem.id + 7;
//     const SECONDMOVE = +elem.id + 9;
//
//     elem.classList.toggle('shadow');
//
//     const elementFirst = document.getElementById(FIRSTMOVE);
//     const elementSecond = document.getElementById(SECONDMOVE);
//
//     elementFirst.addEventListener('click', () => createChest(FIRSTMOVE, elem));
//
//
//     elementFirst.classList.toggle('avaliable');
//     elementSecond.classList.toggle('avaliable');
// }

const area = createAreaForGame();
drawArea(area);
createChestsFirstPlayer(area);
createChestsSecondPlayer(area);
// createChest(10);
