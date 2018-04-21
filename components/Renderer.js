const readline = require('readline');

module.exports = class Renderer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.count = 0;
  }

  renderScreen(gameObjects) {
    for (let i = 1; i <= this.y; i++) {
      let row = '';
      for (let j = 1; j <= this.x; j++) {
        let symbol;
        gameObjects.forEach(obj => {
          if (obj.renderItem(i, j)) {
            symbol = obj.renderItem(i, j);
          }
        });
        if (symbol) {
          row += symbol;
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }
    this.count++;
  }

  updateItems(gameObjects) {
    gameObjects.forEach(obj => {
      obj.updateItem(this.count);
    });
  }

  clearScreen() {
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
  }
};
