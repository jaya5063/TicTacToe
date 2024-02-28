let boxes = document.querySelectorAll(".boxes");

let reset = document.getElementById("reset")

const message = document.getElementById('message')

let player1 = true;

const winningPatterns = [[0, 1, 2], [0, 3, 6],
[0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player1) {
            box.innerHTML = "x"
            player1 = false
        } else {
            box.innerHTML = "o"
            player1 = true
        }

        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winningPatterns) {

        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                message.innerText = `${p1} is the Winner`
            }
        }
    }
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = " "
    })
    message.innerText = " "
})