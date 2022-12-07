const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor(options) {
    this.options = {
      containNumbers: true,
      minLength: 8,
      ...options,
    };
  }

  validate(password) {
    const errors = {};

    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }
    if (this.options.containNumbers && !hasNumber(password)) {
      errors.containNumbers = 'should contain at least one number';
    }
    return errors;
  }
}

export default PasswordValidator;
