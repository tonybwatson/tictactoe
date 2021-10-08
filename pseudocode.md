Objective - game where two players play tic-tac-toe. Objective of the game is to get 3 of your shape (either X or O) in a row on 3x3 game board

Start
    INIT()
        create Model - 
        Init()
            playerOneTurn - boolean
            playerOne = 'X'
            playerTwo = 'O'
            playerSymbol - on playerOneTurn true = X, false = O
            turnOrder [] - add 1 or 10 when player clicks button
            winConditions - if (winArrays) total divisible by 3 or 30, x or o wins respectively - should be 8 combinations per player
            
            
        create View - 
        Init()
            generateHTML()
            createGame() - use generateHTML to populate page
            renderTurn() - put playerSymbol inside button
            clicked - boolean - default true - if false, remove event listener

        create Controller - 
            init()
                restart() - run all init functions to empty page
                updateTurnOrder()
                renderTurn() - changes
                gameTurn() - playerOneTurn true/false, checkWin() if over 5 turns, 
                checkWin()
                

        playerOneTurn = true
        playerOne clicks space in grid
            IF gridSpace contains symbol
                display "only one symbol per square!"
            ELSE showSymbol() inside grid space
                playerOneTurn = false
                add number 1 to winTest
        playerTwo clicks space in grid
            IF gridSpace contains symbol
                display "only one symbol per square!"
            ELSE showSymbol inside grid space
                add number 10 to winTest
            playerOneTurn = true
        IF turnOrder.length > 5
            checkWin() every following turn
            if winConditions == true
                display win message, restartButton, increment score
            ELSE IF turnOrder.length < 9, continue
            ELSE IF turnOrder.length == 9, display "draw"
        IF resetButton clicked
            clearBoard()

Classes
    Model
        Functions
            

        Arrays
            
            turnOrder - start empty, determines current player, number of turns


        Integers
            score

    View
        Functions
                generateHTML()
                createBoard()
                showCurrentPlayer()
                showScore()
                showWinOrTie()
        
        Arrays

        Booleans


    Controller 
        Functions
            init()
            restart()
            checkWin()
            updateClickArray()
            updateCoordGrid()
            changePlayer()

        Arrays
            winConditions - lists possible combinations to win


<!-- in-class pseudocode -->

// Ian's pseudocode
# Tic Tac Toe
## pseudocode of a class
​
​
### dev ops
    setting up repo
    deciding on final wireframe layout
​
Tic Tac Toe Design Pattern
​
// singleton
// exists only once
## App / Game / Board Class
Parent
​
### Model
    // Constructor
    gameExists? true false
​
#### Constant Data 
    win conditions -> could be data / could be abstracted
​
0, 0
1, 0
2, 0
​
/\ win condition
​
    [
        [x,"",o],
        [x,"",o],
        [x,"",""]
    ]
​
#### Stateful logic 
​
    placement of x & o
    1. list of coordinate variables
        x1,y1 => ""
        x1,y2 => ""
        ...
    
    2. array of coordinate variables
        ["","","O","","","X","","",""]
    
    3. 2d array of coordinate variables
        [
            ["","",""],
            ["","",""],
            ["","",""]
        ]
    0, 1, 2, 
    0, 1, -1
    0, 100, 5
​
​
    4. array of objects of moves 
    // the lowest state footprint ->  largest upfront cost
    [
        {
            x: 0,
            y: 2,
            turn: "x"
        },
        {
            x: 0,
            y: 1,
            turn: "o"
        }
    ]
​
    whose turn it is?
        "x"
        "o"
​
​
    number of turns
        -> checking if we should check the win
        -> whose turn is it?
            num = 0
            array.length
            if (num % 2 == 0 ){
               // its x's turn 
            }
            else{
                // its o's turn
            }
​
    game ended?
​
    tie?
​
    restarted? // does not need to be a state -> should be a function that runs on click
        run init function
​
​
​
​
​
​
### View
​
generateHTML() - could be global OR it could be passed down to the children
​
createGrid()
​
createBoard()
​
showWinOrTie()
​
showCurrentPlayer()
​
showScore()
​
### Controller
​
init()
​
restart()
​
checkWin()
    abstract data
​
​
        [
            [1,"",2],
            [1,1,2],
            [2,1,2]
        ]
​
        top row: 3
        middle row: 3
        bottom row: 1
​
        diagonal left: 1
        diagonal right: 3
​
        col right: 4
        col middle: 0
        col left: 3
​
​
    abstract data
        for loop i = 0 > 2
            for loop j = 0 > 2
​
​
updateClickArray()
    // if checkTieOrWinner() true
        // showWinOrTie()
    // else game not ended
        // showCurrentPlayer()
​
updateCoordGrid()
​
updateWinner()
​
​
## Tile / Button Class
Child
// regular class -> there can be more than one
​
### Model
    Who clicked: "", "x", "o"
​
    if its been clicked // abtracted
    true / false OR whoclicked.length
​
    does NOT need to know where it is, that is the responsibility of the App / Board
​
### View
​
// could inherit the generateHTML method
​
createTile()
    generateHTML('div', 'col-4', onTileClick)
​
updateView()
    // render x, o, or blank
​
### Controller
​
onClick()
    // runs view method
    // runs methods from parent (if needed)