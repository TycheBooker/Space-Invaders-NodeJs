const GameObject = require('./GameObject');

module.exports = class EnemyShip extends GameObject {
  constructor(...args) {
    super(...args);
    this.symbol = '▼';
  }

  updateItem(t) {
    if (t % 2) {
      this.x--;
    } else {
      this.x++;
    }
  }
};
