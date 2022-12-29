/* eslint-disable max-classes-per-file */
class Subscription {
  constructor(subscriptionPlanName) {
    this.subscriptionPlanName = subscriptionPlanName;
  }

  hasProfessionalAccess() {
    return this.subscriptionPlanName === 'professional';
  }

  hasPremiumAccess() {
    return this.subscriptionPlanName === 'premium';
  }
}

class FakeSubscription {
  constructor(user) {
    this.user = user;
  }

  hasProfessionalAccess() {
    return this.user.isAdmin() ? 'professional' : false;
  }

  hasPremiumAccess() {
    return this.user.isAdmin() ? 'premium' : null;
  }
}

class User {
  constructor(email, currentSubscription = null) {
    this.email = email;
    this.currentSubscription = currentSubscription || new FakeSubscription(this);
  }

  getCurrentSubscription() {
    return this.currentSubscription;
  }

  isAdmin() {
    return this.email === 'rakhim@hexlet.io';
  }
}

export { Subscription, User };
