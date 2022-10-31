import fs from 'fs';

const watch = (filepath, period, cb) => {
  let lastCheckTime = Date.now();
  const check = (timerId) => {
    fs.stat(filepath, (error, stats) => {
      if (error) {
        clearInterval(timerId);
        cb(error);
        return;
      }
      if (stats.mtimeMs > lastCheckTime) {
        cb(null);
        lastCheckTime = stats.mtimeMs;
      }
    });
  };
  const timerId = setInterval(() => check(timerId), period);
  return timerId;
};

export default watch;
