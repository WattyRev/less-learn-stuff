module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Any time I make a change to a .less file, I want
    // to compile the less into CSS.
    watch: {
      scripts: {
        files: ['**/*.less'],
        tasks: ['less:development'],
        options: {
          spawn: false,
        },
      },
    },

    // Create css/app.css by compiling less/app.less
    less: {
      development: {
        options: {
          paths: ["app"]
        },
        files: {
          "css/app.css": "less/app.less"
        }
      }
    },

    // Minify the app.css
    cssmin: {
        target: {
            files: [{
                expand: true,
                cwd: 'css',
                src: ['app.css'],
                dest: 'css',
            }]
        }
    }
  });

  // Run less compilation and watch for changes
  grunt.registerTask('run', [
     'less',
     'watch'
  ]);

  // Run less compilation and minify the results
  grunt.registerTask('build', [
      'less',
      'cssmin'
  ]);
};