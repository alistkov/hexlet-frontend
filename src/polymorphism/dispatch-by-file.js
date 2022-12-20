import fs from 'fs';
import path from 'path';

class DatabaseConfigLoader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  load(env) {
    const raw = fs.readFileSync(path.join(this.filePath, `database.${env}.json`), 'utf-8');
    const config = JSON.parse(raw);
    const { extend, ...rest } = config;
    return extend ? { ...this.load(extend), ...rest } : config;
  }
}

export default DatabaseConfigLoader;
