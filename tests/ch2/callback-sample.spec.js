import fileManager from '../../libs/ch2/file-manager';

describe('callback', () => {
  function additionalAsync(a, b, callback) {
    setTimeout(() => {
      callback(a + b)
    }, 1000);
  }

  it('call callback after current stack is completed', async (done) => {
    console.log("start");
    additionalAsync(2, 3, (sum) => {
      console.log("result: " + sum);
      done();
    });
    console.log("end");
  });

  describe('propagate error', () => {
    it('return read file to json object', () => {
      fileManager.readJSONThrows('json-file.txt', (err, val) => {
        const { name } = val;
        expect(name).toEqual('test-name');
      });
    });

    it('not handle error when JSON.parse thrown error ', () => {
      try {
        fileManager.readJSONThrows('not-json-file.txt', (err) => {
          console.log(err);
          expect(true).toBeFalsy();
        });
      } catch (err) {
        expect(true).toBeFalsy();
      }
    });

    it('handle uncaughtException within node process error', (done) => {
      process.on('uncaughtException', (err) => {
        console.log('This will catch at last the' + 'JSON parsing exception: ' + err.message);
      });

      fileManager.readJSONThrows('not-json-file.txt', err => console.log(err));
    });
  });
});
