const masqueNumber = {
    buttonShuffleHidden : document.querySelector('#let-start'),
    buttonDrawElmt : document.querySelector('.tirage__btn'),
    motusGrid : document.querySelectorAll('td'),
    availableNumber : [],
    init : function() {
        masqueNumber.buttonShuffleHidden.addEventListener('click', masqueNumber.handleHide);
    },
    handleHide : function() {
        const firstTD = masqueNumber.randomNum(0, 4);
        const secondTD = masqueNumber.randomNum(5, 9);
        const thirdTD = masqueNumber.randomNum(10, 14);
        const fourthTD = masqueNumber.randomNum(14, 19);
        const fifthTD = masqueNumber.randomNum(19, 24);
        masqueNumber.motusGrid[firstTD].classList.add('td--hidden');
        masqueNumber.motusGrid[secondTD].classList.add('td--hidden');
        masqueNumber.motusGrid[thirdTD].classList.add('td--hidden');
        masqueNumber.motusGrid[fourthTD].classList.add('td--hidden');
        masqueNumber.motusGrid[fifthTD].classList.add('td--hidden');
        masqueNumber.buttonShuffleHidden.disabled = true;
        masqueNumber.buttonDrawElmt.disabled = false;
        masqueNumber.makeGrid();
    },
    randomNum : function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    makeGrid : function () {
        const gridAllNumber = masqueNumber.createArray(masqueNumber.motusGrid);
        const hiddenElmt = document.querySelectorAll('.td--hidden')
        const hiddenNumber = masqueNumber.createArray(hiddenElmt);
        masqueNumber.availableNumber = gridAllNumber.filter(x => !hiddenNumber.includes(x));
        masqueNumber.availableNumber.push('0', '70');
    },
    createArray : function(baseArray) {
        let arrayToCreate = [];
        for (let index = 0; index < baseArray.length; index++) {
            arrayToCreate.push(baseArray[index].id);
        }
        return arrayToCreate;
    }
}
document.addEventListener('DOMContentLoaded', masqueNumber.init);