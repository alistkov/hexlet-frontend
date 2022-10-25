import fs from 'fs';

const move = (from, to, cb) => {
  fs.readFile(from, 'utf-8', (readError, data) => {
    if (readError) {
      cb(readError);
      return;
    }
    fs.writeFile(to, data, 'utf-8', (writeError) => {
      if (writeError) {
        cb(writeError);
        return;
      }
      fs.unlink(from, cb);
    });
  });
};

export default move;
