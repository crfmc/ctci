const d2b = x => x.toString(2);

// New class for number manipulation
class Numbr {
  static intro() {
    return 'Hello! I am an advanced Numbr class'
  }
  static static_d2b(n) {
    return d2b(n)
  }

  // Construct a new Numbr instance
  constructor(n) {
    this.num = n;
    this.d2b = (n) => d2b(n)
  }
}

let num = new Numbr(5);
console.log(Numbr.static_d2b(2))
console.log(num.d2b(1 << 1))

module.exports;

/**
 * On the [static] keyword:
 * 
 * Per MDN:
 * "
 * defines a static method or property for a class, or a class
 * static initialization block. Neither static methods nor static
 * properties can be called on instances of the class. Instead, 
 * they are called on the class instead.
 * 
 * [Static functions] are often utility functions, such as functions
 * to create or clone objects, whereas static properties are useful
 * are useful for caches, fixed-configuration, or any other data you
 * don't need to be replicated across instances.
 * "
 * 
 * - Properties
 * In OOP, it is useful to sometimes have fields and functions that 
 * apply to a class, not only to instances of it. For example,
 * if you have a class Fruit, and there is a description of it,
 * it does not need to be initialized as a field of every instances,
 * just once in the class initialization.
 * 
 * 
 * 
 */