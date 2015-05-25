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
      min: ['min'],
      build: ['build']
    },

    svg_sprite: {
      dist: {
        expand: true,
        cwd: 'min',
        src: ['**/*.svg'],
        dest: 'build',
        options: {
          shape: {
            id: {
              separator: '-',
            },
            dimension: {
              maxWidth: 125,
              maxHeight: 125,
            }
          },
          dest: "build",
          mode: {
            css: {
              bust: false,
              example: {
                dest: 'index.html'
              }
            }
          }
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'build/css',
        message: 'Updating example',
        repo: 'git@github.com:muffinresearch/payment-icons.git'
      },
      src: ['**']
    },


  });

  grunt.registerTask('default', ['clean', 'svgmin', 'svg_sprite']);
  grunt.registerTask('publish', ['clean', 'svgmin', 'svg_sprite', 'gh-pages']);

};
