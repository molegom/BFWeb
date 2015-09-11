function Cell(x, y) {

    this.X = x;
    this.Y = y;

}


Cell.prototype.IsNeighbour = function (currCell) {
    if (typeof (currCell) != typeof (Cell)) {
        return false;
    } else {
        return true;
    }
};
