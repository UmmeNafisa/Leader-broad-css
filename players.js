//1.number task
document.getElementById("top-players-title").style.color = 'orange';
document.getElementById("top-blog-title").style.color = 'red';

//2.number task
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
}

//3. number task
document.getElementById("players-btn").addEventListener("click", function () {
    const li = document.createElement('li');
    li.innerText = "player - 4";
    const ul = document.getElementById("player-list")
    ul.appendChild(li);
})

//4.5. number task
document.getElementById("field-btn").addEventListener("click", function () {
    const fieldInput = document.getElementById("players-input");
    let fieldInputValue = parseInt(fieldInput.value)
    if (isNaN(fieldInput.value)) {
        fieldInput.value = " ";
    }
    if (fieldInput.value > 5 && fieldInput.value < 0) {
        document.getElementById("field-btn").style.display = "none";
    } else {
        fieldInput.value = fieldInputValue + 1;
    }
})