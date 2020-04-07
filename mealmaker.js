const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      return this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      return this._courses.mains = mains;
    },
    set desserts(desserts) {
      return this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
    };
  },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);     },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
  },
  generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and The price is $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Milk', 4.25);
  menu.addDishToCourse('appetizers', 'Tea', 4.25); 
    
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  
    