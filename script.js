const scoreText = document.getElementById('score-text');
let totalMiles = eval(scoreText.innerText);


function addMiles(num) {
    if (totalMiles < 1000) {
        if ((totalMiles + num) <= 1000) {
            totalMiles += num;
            scoreText.innerText = totalMiles
        }
    }
}

function resetMiles() {
    totalMiles = 0;
    scoreText.innerText = totalMiles;
}