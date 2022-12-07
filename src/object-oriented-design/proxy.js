/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
class Course {
  constructor({ name, language, created }) {
    this.language = language;
    this._name = name;
    this._created = created;
  }

  get created() {
    return this._getCreated();
  }

  getName() {
    return `${this.language}: ${this._name}`;
  }

  _getCreated() {
    return this._created;
  }

  setName(name) {
    this._name = name;
  }
}

const protect = (obj) => new Proxy(obj, {
  get: (target, name) => {
    if (!(name in target)) {
      throw new Error(`Property "${name}" doesn't exist`);
    }
    if (name.startsWith('_')) {
      throw new Error(`Property "${name}" is protected`);
    }
    const property = target[name];
    return (typeof property === 'function') ? property.bind(obj) : property;
  },

  set: (target, name, value) => {
    if (!(name in target)) {
      throw new Error(`Property "${name}" doesn't exist`);
    }
    if (name.startsWith('_')) {
      throw new Error(`Property "${name}" is protected`);
    }
    target[name] = value;
    return true;
  },
});

export { Course, protect };
