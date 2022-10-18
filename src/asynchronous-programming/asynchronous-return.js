import fs from 'fs';

const write = (file, data, cb) => {
  fs.writeFile(file, data, 'utf-8', cb);
};

export default write;
