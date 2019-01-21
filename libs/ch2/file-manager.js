import fs from 'fs';

export default {
  readJSONThrows(filename, callback) {
    const basePath = './resources/files';
    fs.readFile(`${basePath}/${filename}`, 'utf8', (err, data) => {
      if (err) {
        return callback(err);
      }
      callback(null, JSON.parse(data));
    });
  }
}
