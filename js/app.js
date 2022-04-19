const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    } else {
      console.log('No meal ')
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    } else {
      console.log('No price')
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's meal is ${menu._meal} for $${menu._price}`;
    } else {
      return 'Whoops, something went wrong';
    }
  }
}
menu.meal = 'Rack of lamb with baked ziti';
menu.price = 17.25;

console.log(menu.todaysSpecial);
