const tirage = {
    gridAllNumber : [],
    availableNumber : [],
    init : function() {
        tirage.addEvent();
    },
    makeGrid : function () {
        tirage.gridAllNumber = tirage.createArray(masqueNumber.motusGrid);
        const hiddenElmt = document.querySelectorAll('.td--hidden')
        const hiddenNumber = tirage.createArray(hiddenElmt);
        tirage.availableNumber = tirage.gridAllNumber.filter(x => !hiddenNumber.includes(x));
        tirage.availableNumber.push('0', '70');
    },
    createArray : function(baseArray) {
        let arrayToCreate = [];
        for (let index = 0; index < baseArray.length; index++) {
            arrayToCreate.push(baseArray[index].id);
        }
        return arrayToCreate;
    },
    addEvent : function() {
        masqueNumber.buttonDrawElmt.addEventListener('click', tirage.handleDrawNumber);
    },
    handleDrawNumber : function() {
        let randomTab = masqueNumber.randomNum(0,tirage.availableNumber.length);
        let drawNumber = tirage.availableNumber.splice(randomTab, 1);
        tirage.screenResults(drawNumber);
        tirage.checkMotus();
        tirage.checkBlack();
    },
    screenResults : function(numberToScreen) {
        const screenP = document.querySelector('.tirage > p');
        screenP.textContent = numberToScreen;
        if (numberToScreen=='0' || numberToScreen=='70') {
            screenP.classList.remove('p--bowl');
            screenP.classList.add('p--black');
        } else {
            screenP.classList.remove('p--black');
            screenP.classList.add('p--bowl');
            for (const gridNumber of masqueNumber.motusGrid) {
                if (gridNumber.id == numberToScreen) {
                    gridNumber.classList.add('td--hidden');                    
                }
            };
        }
    },
    checkMotus : function() {
        for (let i = 0; i <= 4; i++) {
            if (masqueNumber.motusGrid[i].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+5].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+10].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+15].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+20].classList == 'td--hidden') {
                tirage.modifWin(i, i+5, i+10, i+15, i+20);
            };
        };
        for (let i = 0; i <= 20; i+=5) {
            if (masqueNumber.motusGrid[i].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+1].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+2].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+3].classList == 'td--hidden' &&
                masqueNumber.motusGrid[i+4].classList == 'td--hidden') {
                tirage.modifWin(i, i+1, i+2, i+3, i+4);
            };
        };
        if (masqueNumber.motusGrid[0].classList == 'td--hidden' &&
            masqueNumber.motusGrid[6].classList == 'td--hidden' &&
            masqueNumber.motusGrid[12].classList == 'td--hidden' &&
            masqueNumber.motusGrid[18].classList == 'td--hidden' &&
            masqueNumber.motusGrid[24].classList == 'td--hidden') {
                tirage.modifWin(0, 6, 12, 18, 24);
            };
        if (masqueNumber.motusGrid[4].classList == 'td--hidden' &&
            masqueNumber.motusGrid[8].classList == 'td--hidden' &&
            masqueNumber.motusGrid[12].classList == 'td--hidden' &&
            masqueNumber.motusGrid[16].classList == 'td--hidden' &&
            masqueNumber.motusGrid[20].classList == 'td--hidden') {
                tirage.modifWin(0, 6, 12, 18, 24);
            };
    },
    modifWin : function(a, b, c, d, e) {
        masqueNumber.motusGrid[a].textContent = 'M';
        masqueNumber.motusGrid[a].classList.add('div--win');
        masqueNumber.motusGrid[b].textContent = 'O';
        masqueNumber.motusGrid[b].classList.add('div--win');
        masqueNumber.motusGrid[c].textContent = 'T';
        masqueNumber.motusGrid[c].classList.add('div--win');
        masqueNumber.motusGrid[d].textContent = 'U';
        masqueNumber.motusGrid[d].classList.add('div--win');
        masqueNumber.motusGrid[e].textContent = 'S';
        masqueNumber.motusGrid[e].classList.add('div--win');
        const winDiv = document.createElement('div');
        winDiv.textContent = 'Mo Mo Motus !';
        document.querySelector('.tirage').append(winDiv);
        masqueNumber.buttonDrawElmt.disabled = true;
    },
    checkBlack : function() {
        if (!tirage.availableNumber.includes('0') && !tirage.availableNumber.includes('70')) {
            const loseDiv = document.createElement('div');
            loseDiv.textContent = 'Ho...ho ho ho... !';
            document.querySelector('.tirage').append(loseDiv);
            masqueNumber.buttonDrawElmt.disabled = true;
        }
    }
}
document.addEventListener('DOMContentLoaded', tirage.init);

