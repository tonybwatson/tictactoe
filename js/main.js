function init() {
    let newApp = new App;
    newApp.init();
    // console.log(newApp);
}

class Model {
    constructor() {
        this.controller = null;
        let playerOneTurn = null;
        let turnArray = []
    }
    setController(c) {
        this.controller = c;
    }

    playerOneTurn() {
        this.playerOneTurn = true;
    }

}

class View {
    constructor() {
        this.m = null;

    }
    setModel(model) {
        this.m = model;
    }

    init() {
        this.app = document.getElementById('app');
        this.app.innerText = '';

    }

    generateHTML({ type, classes, text = '', id = '', style = '', parent = null }) {
        let element = document.createElement(type)
        element.className = classes
        element.innerText = text
        if (parent) {
            parent.appendChild(element)
        }
        return element
    }

    createGame() {
        let container = this.generateHTML({ type: 'div', classes: 'container-8 bg-dark text-light text-center p-4', text: 'Tic-Tac-Toe', parent: this.app })

        let row1 = this.generateHTML({ type: 'div', classes: 'row', text: '', parent: container })
        let gameBox = this.generateHTML({ type: 'div', classes: 'row', text: '', id: 'box', parent: row1 })
        for (let i = 0; i < 9; i++) {
            let col = this.generateHTML({ type: 'div', classes: 'col-4 border', text: '', parent: gameBox })
            let shapeButton = this.generateHTML({ type: 'button', classes: 'btn-dark btn-lg w-100', text: i, parent: col })
            let playerSymbol = this.generateHTML({ type: 'div', classes: 'col', text: '', parent: shapeButton })
        }
    }
}

class Controller {
    constructor(model, view) {
        this.v = view;
        this.m = model;
    }
    init() {
        this.v.createGame();
        this.v.shapeButton.addEventListener('click', this.changePlayer)
    }

    // updateView() {
    //     this.v.render();
    // }

    //         restart()
    //         checkWin()
    // turnArray() {

    // }
    //         updateCoordGrid()
    changePlayer() {
        this.v.shapeButton.onclick = function () {
            if (this.m.playerOneTurn == true) {
                this.m.playerOneTurn = false;
                this.m.turnArray.push('X')
            } else {
                this.m.playerOneTurn = true;
                this.m.turnArray.push('O')
            }
            console.log(this.m.playerOneTurn)
        }
    }
}


class App {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.setModel(this.m);
        this.c = new Controller(this.m, this.v);
        this.m.setController(this.c);
    }

    init() {
        // console.log("it's working!")
        this.v.init();
        this.c.init()

    }

    // updateView() {
    //     this.v.generateHTML();
    // }
}




// // across top
// ['X','X','X','','','','','','']
// // across middle
// ['','','','X','X','X','','','']
// // bottom
// ['','','','','','','X','X','X']
// // vert left
// ['X','','','X','','','X','','']
// // vert middle
// ['','X','','','X','','','X','']
// // vert right
// ['','','X','','','X','','','X']
// // diagonal l to r
// ['X','','','','X','','','','X']
// // diagonal r to l
// ['','','X','','X','','X','','']