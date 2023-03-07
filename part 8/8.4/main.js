// task 1

let dictionary = Object.create(null, {
  toString: { 
    value() { 
      return Object.keys(this).join();
    }
  }
});

// task 2

// разные вызовы. Только в первом случае сработает нормально, в остальных случаях будет undefined