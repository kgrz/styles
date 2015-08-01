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
          {
            expand: true,
            cwd: "stylesheets/business_blog",
            src: ["*.scss"],
            dest: "dist/stylesheets/business_blog",
            ext: ".css"
          },
        ]
      }
    },
  });

  grunt.registerTask('default', ['sass']);
}
