import fs from 'fs';

import cheerio from 'cheerio';
import glob from 'glob';


describe('Test dimensions', () => {
  const files = glob.sync("svg/**/*.svg");

  for (var i=0; i<files.length; i++){
    const file = files[i];

    // Ignore individual logos.
    if (file.includes('svg/single')) {
      continue;
    }

    it(`should have consistent height for ${file}`, (done) => {
      fs.readFile(file, (err, data) => {
        const $ = cheerio.load(data);
        expect($('svg').attr('height')).toBe('471');
        done();
      });
    });

    it(`should have consistent width for ${file}`, (done) => {
      fs.readFile(file, (err, data) => {
        const $ = cheerio.load(data);
        expect($('svg').attr('width')).toBe('750');
        done();
      });
    });

    it(`should have consistent viewBox for ${file}`, (done) => {
      fs.readFile(file, (err, data) => {
        const $ = cheerio.load(data);
        expect($('svg').attr('viewBox')).toBe('0 0 750 471');
        done();
      });
    });

  }
});
