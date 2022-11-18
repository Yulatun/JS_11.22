class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}
class Stack {
  constructor(maxQuantity = 10) {
    if (
      maxQuantity < 0 ||
      typeof maxQuantity !== 'number' ||
      isNaN(maxQuantity) ||
      maxQuantity === Infinity ||
      maxQuantity === -Infinity
    ) {
      throw Error('Invalid limit value');
    } else {
      this.next = null;
      this.size = 0;
      this.maxQuantityInStack = maxQuantity;
    }
  }
  push(elem) {
    if (this.size < this.maxQuantityInStack) {
      let node = new Node(elem);
      node.previous = this.next;
      this.next = node;
      this.size += 1;
    } else {
      throw new Error('Invalid limit value');
    }
  }
  pop() {
    if (this.size === 0) {
      throw new Error('Empty stack');
    } else {
      let lastElement = this.next;
      this.next = this.next.previous;
      this.size = this.size - 1;

      return lastElement.value;
    }
  }
  peek() {
    if (this.size === 0) {
      return null;
    } else {
      let lastElement = this.next;
      return lastElement.value;
    }
  }
  isEmpty() {
    return this.size === 0;
  }
  toArray() {
    if (this.size === 0) {
      return [];
    } else {
      let result = [];
      while (this.size !== 0) {
        result.push(this.next);
        this.next = this.next.previous;
        this.size = this.size - 1;
      }
      return result;
    }
  }
  static fromIterable(iterable) {
    const stack = new Stack();
    if (
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== 'function'
    ) {
      throw new Error('Not iterable');
    } else {
      let newStack = [];
      for (let i = 0; i < iterable.length; i++) {
        let node = new Node(iterable[i]);
        node.previous = this.next;
        this.next = node;
        this.size += 1;
        newStack.push(node);
      }
      return newStack;
    }
  }
}


class NodeForLinkedList {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  append(elem) {
    let node = new NodeForLinkedList(elem);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;
  }
  prepend(elem) {
    let node = new NodeForLinkedList(elem);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size += 1;
  }
  find(elem) {
    let currentNode = this.first;
    function findNode() {
      if (currentNode !== null) {
        if (currentNode.value !== elem) {
          currentNode = currentNode.next;
        } else {
          return currentNode.value;
        }
        findNode();
      }
    }
    findNode();
    if (currentNode === null) {
      return currentNode;
    } else {
      return currentNode.value;
    }
  }
  toArray() {
    let currentNode = this.first;
    let newArray = [];
    function addNode() {
      if (currentNode !== null) {
        newArray.push(currentNode.value);
        currentNode = currentNode.next;
        addNode();
      }
    }
    addNode();
    return newArray;
  }
  static fromIterable(iterable) {
    const list = new LinkedList();
    if (
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== 'function'
    ) {
      throw new Error('Not iterable');
    } else {
      let newLinkedList = [];
      for (let i = 0; i < iterable.length; i++) {
        let node = new NodeForLinkedList(iterable[i]);
        if (list.first === null) {
          list.first = node;
          list.last = node;
          newLinkedList.push(node);
        } else {
          list.last.next = node;
          list.last = node;
          newLinkedList.push(node);
        }
      }
      return newLinkedList;
    }
  }
}


class Car {
  #brand;
  #model;
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  set brand(value) {
    function isEmpty(str) {
      if (str.trim() === '') return true;
      return false;
    }
    if (
      typeof value === 'string' &&
      !isEmpty(value) &&
      value.length > 0 &&
      value.length <= 50
    ) {
      this.#brand = value;
    } else {
      throw new Error('Invalid brand name');
    }
  }
  get brand() {
    return this.#brand;
  }
  set model(value) {
    function isEmpty(str) {
      if (str.trim() === '') return true;
      return false;
    }
    if (
      typeof value === 'string' &&
      !isEmpty(value) &&
      value.length > 0 &&
      value.length <= 50
    ) {
      this.#model = value;
    } else {
      throw new Error('Invalid model name');
    }
  }
  get model() {
    return this.#model;
  }
  set yearOfManufacturing(value) {
    if (
      typeof value === 'number' &&
      value !== Infinity &&
      value !== -Infinity &&
      !isNaN(value) &&
      value > 1950 &&
      value <= new Date().getFullYear()
    ) {
      this.#yearOfManufacturing = value;
    } else {
      throw new Error('Invalid year of manufacturing');
    }
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set maxSpeed(value) {
    if (
      typeof value === 'number' &&
      value !== Infinity &&
      value !== -Infinity &&
      !isNaN(value) &&
      value >= 100 &&
      value <= 330
    ) {
      this.#maxSpeed = value;
    } else {
      throw new Error('Invalid max speed');
    }
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxFuelVolume(value) {
    if (
      typeof value === 'number' &&
      value !== Infinity &&
      value !== -Infinity &&
      !isNaN(value) &&
      value >= 20 &&
      value < 100
    ) {
      this.#maxFuelVolume = value;
    } else {
      throw new Error('(Invalid max fuel volume');
    }
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set fuelConsumption(value) {
    if (
      typeof value === 'number' &&
      value !== Infinity &&
      value !== -Infinity &&
      !isNaN(value) &&
      value > 0
    ) {
      this.#fuelConsumption = value;
    } else {
      throw new Error('Invalid fuel consumption');
    }
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  set damage(value) {
    if (
      typeof value === 'number' &&
      value !== Infinity &&
      value !== -Infinity &&
      !isNaN(value) &&
      value >= 1 &&
      value <= 5
    ) {
      this.#damage = value;
    } else {
      throw new Error('Invalid damage');
    }
  }
  get damage() {
    return this.#damage;
  }
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }
  get isStarted() {
    return this.#isStarted;
  }
  get mileage() {
    return this.#mileage;
  }
  get health() {
    return this.#health;
  }
  start() {
    if (this.#isStarted) {
      throw new Error('Car has already started');
    }
    return (this.#isStarted = true);
  }
  shutDownEngine() {
    if (this.#isStarted) {
      return (this.#isStarted = false);
    }
    throw new Error(`Car hasn't started yet`);
  }
  fillUpGasTank(fuel) {
    if (
      typeof fuel !== 'number' ||
      fuel === Infinity ||
      fuel === -Infinity ||
      isNaN(fuel) ||
      fuel <= 0
    ) {
      throw new Error('Invalid fuel amount');
    }
    if (this.#isStarted === true) {
      throw new Error('You have to shut down your car first');
    }
    if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Too much fuel)');
    }
    this.#currentFuelVolume = this.#currentFuelVolume + fuel;
  }
  drive(speed, hours) {
    if (
      typeof speed !== 'number' ||
      speed === Infinity ||
      speed === -Infinity ||
      isNaN(speed) ||
      speed <= 0
    ) {
      throw new Error('Invalid speed');
    }
    if (
      typeof hours !== 'number' ||
      hours === Infinity ||
      hours === -Infinity ||
      isNaN(hours) ||
      hours <= 0
    ) {
      throw new Error('Invalid duration');
    }
    if (speed > this.#maxSpeed) {
      throw new Error(`Car can't go this fast`);
    }
    if (!this.#isStarted) {
      throw new Error('You have to start your car first');
    }
    if (
      (this.#fuelConsumption * (speed * hours)) / 100 >
      this.#currentFuelVolume
    ) {
      throw new Error(`You don't have enough fuel`);
    }
    if (this.#health < ((speed * hours) / 100) * this.#damage) {
      throw new Error('Your car won’t make it');
    }
    const allDamage = ((speed * hours) / 100) * this.#damage;
    this.#health = this.#health - allDamage;
    this.#mileage = this.#mileage + speed * hours;
    this.#currentFuelVolume =
      this.#currentFuelVolume - this.#fuelConsumption * ((speed * hours) / 100);
  }
  repair() {
    if (this.#isStarted === true) {
      throw new Error('You have to shut down your car first)');
    }
    if (this.#maxFuelVolume !== this.#currentFuelVolume) {
      throw new Error('You have to fill up your gas tank first');
    }
    this.#health = 100;
  }
  getFullAmount() {
    if (this.#maxFuelVolume === this.#currentFuelVolume) {
      return 0;
    }
    return this.#maxFuelVolume - this.#currentFuelVolume;
  }
}

