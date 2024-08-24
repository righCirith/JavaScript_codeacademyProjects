let menu = {
  _meal: '',
  _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('Invalid input: meal should be a string.');
      }
    },
    
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      console.log('Invalid input: price should be a non-negative number.');
    }
  },
  
  get todaysSpecial() {
     if (this._meal && this._price) {
       return `Today's Meal is ${this._meal} for $${this._price}!`
     } else {
       return `Meal or price was not set correctly!`
     }
   }

};

menu._meal = 'fish';
menu._price = 999999999999999;

console.log(menu.todaysSpecial);