<h1>Walk-e Robot Toy</h1>

<h2>Project</h2>

This is a web application that recreates a simple robot. Using a command line interface, instructions can be given to place two types of elements on a 5x5 board: a robot called "Walk-e" or a wall called "Chocochunk." Additionally, through commands, the robot can be moved across the board, rotated, or a report can be generated with its current coordinates.

<h2>Design</h2>

The design is conceived for a smooth and intuitive user experience, with an kids-friendly interface that provides a game board, a pannel to build commands and a button for explicit instructions. This makes the app conceivable as a real digital toy for kids, so they can learn about coordenates by playing with funny elements.

<h3>Desktop Views</h3>
 
![Group%202.png](https://github.com/CeliaGC/walk-e/blob/main/src/assets/images/readme_images/Walk-e_app1.png)
![Group%202.png](https://github.com/CeliaGC/walk-e/blob/main/src/assets/images/readme_images/Walk-e_app2.png)
![Group%202.png](https://github.com/CeliaGC/walk-e/blob/main/src/assets/images/readme_images/Walk-e_app3.png)


<h3>Responsive Views</h3>

![Group%201.png](https://github.com/MyFaveImagesProject/MyFaveImgFront/blob/main/src/assets/images/Group%201.png)
 

<h2>Development</h2>

The application is built with components that are exported to another component or the main "app" file, following atomic design principles. Each component is contained in a folder along with its CSS file and corresponding tests. The purely logical functionality of the game, consisting of a series of conditionals that configure the appearance of the board cells, is separated from the components in a JavaScript file. Conventions and best practices have been followed for clean and readable code.

<h2>Stack</h2>

Git Version Control system
Git Hub plattform

<h3>Front-end</h3>

<h4>Tools</h4>
Visual Studio code

<h4>Lenguages</h4>
Html
CSS
Javascript

<h4>Libraries</h4>
React Vite
React Bootstrap
React testing Library
Jest
Babel

<h2>Install the project</h2>

-Clone project

[https://github.com/CeliaGC/piecesOfLifeFrontend.git](https://github.com/CeliaGC/walk-e.git)

-Open project in Visual Studio

-Open terminal and run command: npm i

-Now run command: npm run dev

-Click and follow localhost link

-To run test, type in terminal command: npm test

<h2>Game</h2>

Once Walk-e is placed, he can move towards the direction he is facing (north, east, south or west) and turn left or right in an angle of 90 degrees around his own axis.

If Walk-e gets a Chocochunk in the cell he is supposed to move next, he will not move. If he is told to move one cell and he is placed in the edge of a column or row, he will appear in the opposite edge of that column or row. If a Chocochunk is placed there, he will not move.

There is also a report of the coordenates of his current position by submitting a command. The report will appear in a pop up modal.

To build commands, there is the possibility of typing it directly in the textarea or buil it with the buttons provided in the pannel. Once "ROBOT" or "WALL" are clicked, the options menu will pop up to set the coordenates of the element, and the facing in case "ROBOT" was clicked. This parameters must be selected in the order or appearance of the buttons in the options menu, so the correct syntax is granted, otherwise there will be no reaction. Commands are submmited once at time.

Coordenates begin at bottom left cell with 1,1 and upper right cell with 5,5. 1,2 would be the second bottom cell from left, 2,1 would be the first cell in the row above, etc.

<h2>Developer</h2>

Celia Garcia Castilla https://github.com/CeliaGC/Celia_Garcia

I wish you a happy user experience

