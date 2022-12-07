const run = (text) => {
  const takeLast = (string, count) => {
    if (string.length === 0 || string.length < count) {
      return null;
    }
    return string.slice(-count).split('').reverse().join('');
  };

  return takeLast(text, 4);
};

export default run;
