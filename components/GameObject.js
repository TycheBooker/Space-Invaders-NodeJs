module.exports = class GameObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.symbol;
  }
  renderItem(i, j) {
    if (i === this.y && j === this.x) {
      return this.symbol;
    } else {
      return false;
    }
  }

  updateItem() {}
};
