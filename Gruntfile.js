module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    svgmin: {
      options: {
        plugins: [
          //{ removeViewBox: false },
          //{ removeUselessStrokeAndFill: false }
        ]
      },
      dist: {
        expand: true,
        cwd: 'svg/',
        src: ['*.svg'],
        dest: 'min',
      }
    }
  });

  grunt.registerTask('default', ['svgmin']);

};
