/* eslint-disable max-classes-per-file */

export class Guest {
  constructor() {
    this.type = 'guest';
    this.name = 'Guest';
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

export class User {
  constructor(name) {
    this.type = 'user';
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

const greetings = {
  guest: (guest) => `Nice to meet you ${guest.getName()}!`,
  user: (user) => `Hello ${user.getName()}!`,
};

export const getGreeting = (user) => greetings[user.getType()](user);
