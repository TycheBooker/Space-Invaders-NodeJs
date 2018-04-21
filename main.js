const Renderer = require('./components/Renderer');
const PlayerShip = require('./components/PlayerShip');
const EnemyShip = require('./components/EnemyShip');

const fieldX = 20;
const fieldY = 10;

const renderer = new Renderer(fieldX, fieldY);
const playerShip = new PlayerShip(4, 10);
const enemy1 = new EnemyShip(2, 2);
const enemy2 = new EnemyShip(4, 2);
const enemy3 = new EnemyShip(6, 2);
const enemy4 = new EnemyShip(8, 2);

const gameObjects = [playerShip, enemy1, enemy2, enemy3, enemy4];

const runGame = function() {
  renderer.clearScreen();
  renderer.renderScreen(gameObjects);
  renderer.updateItems(gameObjects);
};

setInterval(runGame, 1000);
