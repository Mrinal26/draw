class Shape {
    constructor(type, alignment, drawChar, rows, columns) {
      this.type = type;
      this.alignment = alignment;
      this.drawChar = drawChar;
      this.rows = rows;
      this.columns = columns;
    }
  
    draw() {
      let shape = '';
      switch (this.type) {
        case 'rectangle':
          shape = this.drawRectangle();
          break;
        case 'square':
          shape = this.drawSquare();
          break;
        case 'triangle':
          shape = this.drawTriangle();
          break;
        default:
          throw new Error('Invalid shape type');
      }
      return shape;
    }
  
    drawRectangle() {
      let shape = '';
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          shape += this.drawChar;
        }
        shape += '\n';
      }
      return shape;
    }
  
    drawSquare() {
      return this.drawRectangle();
    }
  
    drawTriangle() {
      let shape = '';
      for (let i = 1; i <= this.rows; i++) {
        shape += this.drawChar.repeat(i);
        shape += '\n';
      }
      return shape;
    }
  
    alignShape(shape) {
      let alignedShape = '';
      const rowsArr = shape.trim().split('\n');
      const maxWidth = Math.max(...rowsArr.map(row => row.length));
  
      for (let row of rowsArr) {
        let spaces = '';
        if (this.alignment === 'center') {
          spaces = ' '.repeat(Math.floor((maxWidth - row.length) / 2));
        } else if (this.alignment === 'right') {
          spaces = ' '.repeat(maxWidth - row.length);
        }
        alignedShape += spaces + row + '\n';
      }
      return alignedShape;
    }
  }
  
  
  const shape = new Shape('triangle', 'center', 'A', 5, 5);
  const drawnShape = shape.draw();
  const alignedShape = shape.alignShape(drawnShape);
  console.log(alignedShape);
  