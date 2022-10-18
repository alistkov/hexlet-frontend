/* eslint-disable no-console */
import fs from 'fs';

const print = (file) => {
  fs.readFile(file, 'utf-8', (_error, data) => {
    console.log(data);
  });
};

export default print;
