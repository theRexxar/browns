module.exports = (grunt) ->

  ###
  Dynamically load npm tasks
  ###
  require("load-grunt-tasks") grunt

  grunt.initConfig

    pkg: grunt.file.readJSON("package.json")

    mozjpeg = require('imagemin-mozjpeg')


    # Watching changes files *.less, *.js,
    watch:
      all:
        files: [
          "Gruntfile.coffee"
          "public/js/**/*.js"
          "public/less/**/*.less"
        ]
        tasks: [
          "clean:dev"
          "less:compileCore"
          "less:compileCustom"
          "concat:bootstrap"
          "concat:plugin"
          "concat:custom"
          "watch"
        ]
        options:
          nospawn: true

    # Concat js files
    concat:
      options:
        separator: ";" #separates scripts

      bootstrap:
        src: [
          "public/js/bootstrap/transition.js"
        ]
        dest: "public/js/bootstrap.js"

      plugin:
        src: [
          "public/js/libs/modernizr.min.js"
          "public/js/mylibs/turn.js"
          "public/js/mylibs/querypp.custom.js"
          "public/js/mylibs/jquery.bookblock.js"
          "public/js/mylibs/jquery.colorbox.js"
        ]
        dest: "public/js/plugin.js"

      custom:
        src: [
          "public/js/custom/*"

        ]
        dest: "public/js/app.js"

    jshint:
      options:
        jshintrc: "js/bootstrap/.jshintrc"

      src:
        src: "js/bootstrap/*.js"

    #our uglify options
    uglify:
      options:
        report: "min"
        compress:
          dead_code: true
          drop_console: true

      # wrap: true,
      # sourceMap: true
      bootstrap:
        src: "<%= concat.bootstrap.dest %>"
        dest: "public/js/bootstrap.min.js"

      apps:
        src: [
          "public/js/plugins.js"
        ]
        dest: "public/js/apps.min.js"

      main_script:
        src: [
          "public/js/app.js"
        ]
        dest: "public/js/<%= pkg.name.toLowerCase() %>.min.js"

    # less compiler
    less:
      compileCore:
        options:
          strictMath: true
          sourceMap: true
          outputSourceFiles: true
          sourceMapURL: "bootstrap.css.map"
          sourceMapFilename: "public/css/bootstrap.css.map"

        files:
          "public/css/bootstrap.css": "public/less/bootstrap/bootstrap.less"

      compileTheme:
        options:
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap-theme.css.map',
          sourceMapFilename: 'public/css/bootstrap-theme.css.map'
        files:
          'public/css/bootstrap-theme.css': 'public/less/bootstrap/theme.less'

      compileCustom:
        options:
          strictMath: true
          sourceMap: true
          outputSourceFiles: true
          sourceMapURL: "<%= pkg.name %>.css.map"
          sourceMapFilename: "public/css/<%= pkg.name.toLowerCase() %>.css"

        files:
          "public/css/<%= pkg.name.toLowerCase() %>.css": "public/less/<%= pkg.name.toLowerCase() %>.less"
          
      minify:
        options:
          cleancss: true,
          report: 'min'
          sourceMap: false
        files:
          'public/css/<%= pkg.name.toLowerCase() %>.min.css': 'public/css/<%= pkg.name.toLowerCase() %>.css'
          'public/css/bootstrap.min.css': 'public/css/bootstrap.css'
          'public/css/bootstrap-theme.min.css': 'public/css/bootstrap-theme.css'


    # for sorting CSS properties in specific order
    csscomb:
      options:
        config: 'less/.csscomb.json'
      dist:
        files:
          'public/css/bootstrap.min.css': 'public/css/bootstrap.min.css'
          'public/css/bootstrap-theme.min.css': 'public/css/bootstrap-theme.min.css'

    clean:
      dev: [
        "public/js/bootstrap.js"
        "public/css/bootstrap.css"
        "public/css/bootstrap-theme.css"
        "public/css/<%= pkg.name.toLowerCase() %>.css"
      ]

      build: [
        "public/js/bootstrap.min.js"
        "public/css/bootstrap.css.map"
        "public/css/bootstrap.min.css"
        "public/css/bootstrap-theme.css.map"
        "public/css/bootstrap-theme.min.css"
        "public/css/<%= pkg.name.toLowerCase() %>.css.map"
        "public/css/<%= pkg.name.toLowerCase() %>.min.css"
      ]

    imagemin: 
      dynamic: 
        options: 
          optimizationLevel: 7,
          svgoPlugins: [ removeViewBox: false ],
          use: [mozjpeg()]
        files: [
          expand: true,                  
          cwd: 'public/img/',                   
          src: ['**/*.{png,jpg,gif,svg}'],   
          dest: 'public/img/'                  
        ]

  grunt.registerTask "dev", [
    "clean:dev"
    "less:compileCore"
    "less:compileTheme"
    "less:compileCustom"
    "concat"
    "uglify"
  ]

  grunt.registerTask "default", [
    "dev"
    "watch"
  ]

  grunt.registerTask "imgcompress", [
    "imagemin:dynamic"
  ]

  grunt.registerTask "build", [
    "clean:build"
    "less:compileCore"
    "less:compileTheme"
    "less:compileCustom"
    "less:minify"
    "csscomb"
    "concat"
    "uglify"
  ]
  return
