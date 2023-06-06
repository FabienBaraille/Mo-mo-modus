const masqueNumber = {
    buttonShuffleHidden : document.querySelector('#let-start'),
    buttonDrawElmt : document.querySelector('.tirage__btn'),
    motusGrid : document.querySelectorAll('td'),
    init : function() {
        masqueNumber.addEvent();
    },
    addEvent : function() {
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
        tirage.makeGrid();
    },
    randomNum : function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
document.addEventListener('DOMContentLoaded', masqueNumber.init);