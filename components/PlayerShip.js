const GameObject = require('./GameObject');

module.exports = class PlayerShip extends GameObject {
  constructor(...args) {
    super(...args);
    this.symbol = '▲';
  }
};
