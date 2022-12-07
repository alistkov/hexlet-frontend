class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParseError';
  }
}

const parseJson = (string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    throw new ParseError('Invalid JSON string');
  }
};

export { ParseError, parseJson };
