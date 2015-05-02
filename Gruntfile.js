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
        src: ['**/*.svg'],
        dest: 'min',
      }
    },

    clean: {
      min: ['min']
    }

  });

  grunt.registerTask('default', ['clean', 'svgmin']);

};
