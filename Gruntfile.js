module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    sass: {
      options: {
        trace: true,
        style: 'compressed'
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "stylesheets/tips",
            src: ["*.scss"],
            dest: "dist/stylesheets/tips",
            ext: ".css"
          },
          {
            expand: true,
            cwd: "stylesheets/codemancers",
            src: ["*.scss"],
            dest: "dist/stylesheets/codemancers",
            ext: ".css"
          },
        ]
      }
    },
  });

  grunt.registerTask('default', ['sass']);
}
