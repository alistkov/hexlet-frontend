const make = (numer, denom) => ({
  numer,
  denom,

  setNumer(newNumer) {
    this.numer = newNumer;
  },

  setDenom(newDenom) {
    this.denom = newDenom;
  },

  getNumer() {
    return this.numer;
  },

  getDenom() {
    return this.denom;
  },

  toString() {
    return `${this.numer}/${this.denom}`;
  },

  add(rat) {
    const ratNumer = rat.getNumer();
    const ratDenom = rat.getDenom();
    return make(this.numer * ratDenom + this.denom * ratNumer, this.denom * ratDenom);
  },

});

export default make;
