class Player {
    constructor(symbol) {
        this.symbol = symbol;
    }
    turn(element) {
        element.textContent = this.symbol;
        element.classList.add(`${this.symbol}`)
    }
    check(myTiles) {
        let topNumber = 0;
        let centerNumber = 0;
        let bottomNumber = 0;
        let leftNumber = 0;
        let middleNumber = 0;
        let rightNumber = 0;
        let message = document.querySelector('.whosTurn')
        let player = this.symbol
        myTiles.forEach(function(tile) {
            tile.classList.forEach(function(className) {
                if (className == 'top') {
                    topNumber++;
                    if (topNumber == 3) {
                        message.textContent = `${player} is the Winner!!`
                    }
                } else if (className == 'center') {
                    centerNumber++;
                    if (centerNumber == 3) {
                        message.textContent = `${player} is the Winner!!`
                    }
                } else if (className == 'bottom') {
                    bottomNumber++;
                    if (bottomNumber == 3) {
                        message.textContent = `${player} is the Winner!!`
                    }
                } else if (className == 'left') {
                    leftNumber++;
                    if (leftNumber == 3) {
                        message.textContent = `${player} is the Winner!!`
                    }
                } else if (className == 'middle') {
                    middleNumber++;
                    if (middleNumber == 3) {
                        message.textContent = `${player} is the Winner!!`
                    }
                } else if (className == 'right') {
                    rightNumber++;
                    if (rightNumber == 3) {
                        message.textContent = `${player} is the Winner!!`
                    }
                } 
            })
        })
    }
}

const xPlayer = new Player('X');
const oPlayer = new Player('O')

let tiles = document.querySelectorAll('.tile')
let message = document.querySelector('.whosTurn')

let round = 1;
tiles.forEach(function(tile) {
    tile.addEventListener('click', function() {
        if (tile.textContent == '') {
            if ((round % 2) == 0) {
                oPlayer.turn(tile);
                let oTiles = document.querySelectorAll('.O');
                oPlayer.check(oTiles);
                round++;
            } else {
                xPlayer.turn(tile);
                let xTiles = document.querySelectorAll('.X');
                xPlayer.check(xTiles);
                round++;
            }
        }
    })
})

const reset = document.querySelector('.reset')
reset.addEventListener('click', function() {
    tiles.forEach(function(tile) {
        tile.textContent = ''
        tile.classList.forEach(function(className) {
            if (className == 'X') {
                tile.classList.remove(className)
            } else if (className == 'O') {
                tile.classList.remove(className)
            }
        })
    })
    message.textContent = 'Lets play Tic-Tac-Toe. Xs go first'
    round = 1
})