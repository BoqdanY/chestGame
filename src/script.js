'use strict';

//initialization
function createAreaForGame() {
    let area = [];
    let counterBlack = 1;
    let counterId = 0;

    for (let row = 0; row < 6; row++) {
        let res = [];

        for (let col = 0; col < 6; col++, counterId++) {
            if ((col + counterBlack) % 2 === 0){
                res.push({positionX: row,
                    positionY: col,
                    id: counterId,
                    content: `<div id="${counterId}" class="white col">${row + 1}, ${col + 1}</div>`
                });
            }else {
                res.push({positionX: row,
                    positionY: col,
                    id: counterId,
                    content: `<div id="${counterId}" class="black col">${row + 1}, ${col + 1}</div>`
                });
            }
        }

        counterBlack++;
        area.push(res);
    }

    return area;
}


function createChest() {
    const chest = document.createElement('div');
    chest.className = 'chestRed';
    chest.addEventListener("click", () => chest.classList.toggle('shadow'));

    document.getElementById('1').append(chest);
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

drawArea(createAreaForGame());
createChest();