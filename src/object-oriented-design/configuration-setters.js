class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  constructor(options) {
    this.options = {
      ...Truncater.defaultOptions,
      ...options,
    };
  }

  truncate(string, settings) {
    const r = {
      ...this.options,
      ...settings,
    };

    if (r.length >= string.length) {
      return string;
    }

    const result = `${string.substring(0, r.length)}${r.separator}`;
    return result;
  }
}

export default Truncater;
