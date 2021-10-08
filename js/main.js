function init() {
  let newApp = new App();
  newApp.init();
  console.log(newApp);
}

class Model {
  constructor(controller) {
    this.controller = controller;
    this.playerOneTurn = true;
    this.playerOne = 'X';
    this.playerTwo = 'O';
    this.playerSymbol = '';
    this.turns = 0;
    this.gamePlaces = []
  }

  setController(controller) {
    this.controller = controller;
  }
  
  init() {
    this.playerOneTurn = true;
    this.playerSymbol = 'X';
    this.turns = 0;
    this.gamePlaces = ['', '', '', '', '', '', '', '', '',]
  }
  
  
}

class View {
  constructor() {
    this.controller = null;
  }

  setController(controller) {
    this.controller = controller;
  }

  init() {
    this.app = document.getElementById("app");
    this.app.innerText = "";
    this.setController;
  }

  generateHTML({
    type,
    classes,
    text = "",
    id = "",
    style = "",
    onclick = "",
    parent = null,
    handler = null
  }) {
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;
    element.id = id;
    element.style = style;
    element.onclick = onclick;
    if (parent) {
      parent.appendChild(element);
    }
    if (handler) {
      element.addEventListener("click", handler);
    }
    return element;
  }

  createGame() {
    let container = this.generateHTML({
      type: "div",
      classes: "container text-light text-center p-4",
      text: "Tic-Tac-Toe",
      parent: this.app
    });
    let topRow = this.generateHTML({
      type: "div",
      classes: "row",
      text: "",
      parent: container
    })
    let row1 = this.generateHTML({
      type: "div",
      classes: "row",
      text: "",
      parent: container
    });
    let gameBox = this.generateHTML({
      type: "div",
      classes: "row",
      text: "",
      id: "box",
      parent: row1
    });
    for (let i = 0; i < 9; i++) {
      let col = this.generateHTML({
        type: "div",
        classes: "col-4 border",
        text: "",
        parent: gameBox,
        // handler: this.controller.gameTurn.bind(this.controller)
      });
      let shapeButton = this.generateHTML({
        type: "button",
        classes: "btn-dark btn-lg w-100",
        text: " ",
        id: i,
        parent: col,
        handler: this.controller.gameTurn.bind(this.controller)
      });
      
    }
    let resetButton = this.generateHTML({
      type: "button",
      classes: "btn-dark btn-lg mt-3",
      text: "Restart?",
      id: "reset",
      parent: container,
      handler: this.controller.reset.bind(this.controller)
    });
  }
  
  renderTurn() {
    this.shapeButton.innerText = this.controller.playerSymbol
  }
}

class Controller {
  constructor(model, view) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.createGame();
    this.model.playerOneTurn = true;
  }

  gameTurn(e) {
    console.log(e.target.id);
    if (this.model.playerOneTurn == true) {
      this.model.playerOneTurn = false;
      this.model.playerSymbol = this.model.playerOne
    } else {
      this.model.playerOneTurn = true;
      this.model.playerSymbol = this.model.playerTwo
    }

    this.model.turns++;
    e.target.textContent = this.model.playerSymbol 
    //
    // this.view.topRow.text = this.model.playerSymbol
    //
    // e.target.view.removeEventListener('click', this.gameTurn, false)
    console.log("it works?!?");
    console.log(this.model.turns);
    if (this.model.turns > 5) {
    //   this.checkWin()
    }
    if (this.model.turns % 9 === 0 && this.model.turns > 0) {
        alert('Draw!')
        }
  }

//   checkWin() {
//     if (this.view.shapeButton.id == this.model.winArrays) {
      
//     }
//   }
  
  reset() {
    this.view.init()
    this.init()
    this.model.init()
  }
}

class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
    this.model.setController(this.controller);
    this.view.setController(this.controller);
  }

  init() {
    this.model.init();
    this.view.init();
    this.controller.init();
  }
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