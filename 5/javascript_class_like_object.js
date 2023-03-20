class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  toString() {
    return `${this.name} is a ${this.type}`
  }
}

const dog = new Animal('test', 'pizdest')

console.log(dog.toString())