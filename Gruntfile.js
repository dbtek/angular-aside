'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    appConfig: {
      app: 'src',
      name: 'Angular Aside',
      dist: 'dist'
    },
    banner: '/*!\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
            ' * License: <%= pkg.license %>\n' +
            ' */\n',
    concat: {
      js: {
        options: {
          banner: "\n<%= banner %>\n",
          stripBanners: true
        },
        files: {
          '.tmp/concat/js/angular-aside.js': ['<%= appConfig.app %>/scripts/{,*/}*.js']
        }
      },
      css: {
        options: {
          banner: '<%= banner %>\n'
        },
        files: {
          '<%= appConfig.dist %>/css/angular-aside.css': ['<%= appConfig.app %>/styles/{,*/}*.css']
        }
      }
    },
    connect: {
      test: {
        options: {
         port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= appConfig.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appConfig.dist %>/*',
            '!<%= appConfig.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= appConfig.app %>/scripts/{,*/}*.js'
      ]
    },
    cssmin: {
      dist: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          '<%= appConfig.dist %>/css/angular-aside.min.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= appConfig.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/js',
          src: '*.js',
          dest: '<%= appConfig.dist %>/js'
        }]
      }
    },
    uglify: {
      dist: {
        options: {
          preserveComments: 'some'
        },
        files: {
          '<%= appConfig.dist %>/js/angular-aside.min.js': ['<%= appConfig.dist %>/js/angular-aside.js']
        }
      }
    },
    ngdocs: {
      options: {
        dest: 'docs',
        html5Mode: false,
        title: '<%= appConfig.name %> Documentation'
      },
      all: ['<%= appConfig.app %>/scripts/{,*/}*.js']
    }
  });

  grunt.registerTask('test', [
    'clean:server',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'ngdocs',
    'clean:dist',
    'concat',
    'ngAnnotate',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);

};
