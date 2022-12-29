import _ from 'lodash';

class InMemoryKV {
  constructor(data = {}) {
    this.data = _.cloneDeep(data);
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key, defaultValue = null) {
    return _.get(this.data, key, defaultValue);
  }

  unset(key) {
    this.data = _.omit(this.data, key);
  }

  toObject() {
    return _.cloneDeep(this.data);
  }
}

const swapKeyValue = (data) => {
  const dataObj = data.toObject();
  const entries = Object.entries(dataObj);
  entries.forEach(([key]) => data.unset(key));
  entries.forEach(([key, value]) => data.set(value, key));
};

export { InMemoryKV, swapKeyValue };
