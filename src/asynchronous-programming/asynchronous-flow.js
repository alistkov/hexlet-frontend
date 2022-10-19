import fs from 'fs';

const compareFileSizes = (file1, file2, cb) => {
  fs.stat(file1, (_error, data) => {
    fs.stat(file2, (_error2, data2) => {
      cb(null, Math.sign(data.size - data2.size));
    });
  });
};

export default compareFileSizes;
