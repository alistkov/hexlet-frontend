class Url {
  constructor(url) {
    this.url = new URL(url);
  }

  getScheme() {
    return this.url.protocol.slice(0, -1);
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return Object.fromEntries(new URLSearchParams(this.url.search));
  }

  getQueryParam(param, defaultValue = null) {
    return this.getQueryParams()[param] ?? defaultValue;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return (this.toString() === url.toString());
  }
}

export default Url;
