import fs from 'fs';

import cheerio from 'cheerio';
import glob from 'glob';


describe('Test security', () => {
  const files = glob.sync("svg/**/*.svg");

  for (var i=0; i<files.length; i++){
    const file = files[i];

    it(`should have no script ${file}`, (done) => {
      fs.readFile(file, (err, data) => {
        const $ = cheerio.load(data);
        expect($('script').length).toBe(0);
        done();
      });
    });

    it(`should have no style ${file}`, (done) => {
      fs.readFile(file, (err, data) => {
        const $ = cheerio.load(data);
        expect($('style').length).toBe(0);
        done();
      });
    });
  }
});
