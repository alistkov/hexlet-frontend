import _ from 'lodash';

export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return _.sumBy(this.items, (goods) => goods.item.price * goods.count);
  }

  getCount() {
    return _.sumBy(this.items, 'count');
  }
}
