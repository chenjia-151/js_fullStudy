
Car.prototype.height = 1400
Car.prototype.lang = 4900
Car.prototype.carName = 'BMW'

function Car(color, owner) {
    this.color = color
    this.owner = owner
    // this.carName = 'BWM'  // 耦合度高
    // this.lang = 4900
    // this.height = 1400
}

var car = new Car('red', 'mrWang')
console.log(car);