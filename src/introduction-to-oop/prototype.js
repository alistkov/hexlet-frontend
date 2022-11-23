const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currentCurrency = this.getCurrency();
  const value = this.getValue();
  if (currentCurrency === newCurrency) {
    return new Money(value, currentCurrency);
  }

  const newValue = value * rates[currentCurrency][newCurrency];
  return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
  const initialCurrency = this.getCurrency();
  const convertedValue = money.exchangeTo(initialCurrency).getValue();
  return new Money(this.getValue() + convertedValue, initialCurrency);
};

Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

export default Money;
