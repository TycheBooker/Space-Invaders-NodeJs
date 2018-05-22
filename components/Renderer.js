module.exports = class Renderer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.count = 0;
    this.output = process.stdout;
    this.input = process.stdin;
  }

  renderScreen(gameObjects) {
    for (let i = 1; i <= this.y; i++) {
      // let row = '';
      for (let j = 1; j <= this.x; j++) {
        let symbol;
        gameObjects.forEach(obj => {
          if (obj.renderItem(i, j)) {
            symbol = obj.renderItem(i, j);
          }
        });
        if (symbol) {
          this.output.write(symbol);
        } else {
          this.output.write(' ');
        }
      }
      this.output.write('\n');
    }
    this.count++;
  }

  updateItems(gameObjects) {
    gameObjects.forEach(obj => {
      obj.updateItem(this.count);
    });
  }

  clearScreen() {
    this.output.write('\u001b[2J\u001b[0;0H');
  }
};
