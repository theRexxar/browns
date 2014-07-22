module.exports = (grunt) ->

  ###
  Dynamically load npm tasks
  ###
  require("load-grunt-tasks") grunt

  grunt.initConfig

    pkg: grunt.file.readJSON("package.json")

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
          "less:backend"
          "concat:bootstrap"
          "concat:plugin"
          "concat:custom_plugin"
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
          "public/js/bootstrap/alert.js"
          "public/js/bootstrap/button.js"
          "public/js/bootstrap/carousel.js"
          "public/js/bootstrap/collapse.js"
          "public/js/bootstrap/dropdown.js"
          "public/js/bootstrap/modal.js"
          "public/js/bootstrap/tooltip.js"
          "public/js/bootstrap/popover.js"
          "public/js/bootstrap/scrollspy.js"
          "public/js/bootstrap/tab.js"
          "public/js/bootstrap/affix.js"
        ]
        dest: "public/js/bootstrap.js"

      plugin:
        src: [
          "public/js/mylibs/jquery.scrollTo.js"
          "public/js/mylibs/jquery.cycle2.js"
          "public/js/mylibs/jquery.cycle2.carousel.js"
          "public/js/mylibs/waypoints.min.js"
          "public/js/mylibs/jquery.colorbox-min.js"
          "public/js/mylibs/json2.js"
          "public/js/bootstrap/tooltip.js"
          "public/js/mylibs/jStorage.js"
          "public/js/mylibs/cbpFWTabs.js"
          "public/js/mylibs/lodash.js"
          "public/js/mylibs/mustache.js"
          "public/js/mylibs/jquery.mustache.js"
          "public/js/mylibs/jquery.slimscroll.min.js"
          "public/js/mylibs/jquery.validate.min.js"
        ]
        dest: "public/js/plugin.js"

      custom_plugin:
        src: [
          "public/js/tunetalk/*"

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

      # wrap: true,
      # sourceMap: true
      bootstrap:
        src: "<%= concat.bootstrap.dest %>"
        dest: "public/js/bootstrap.min.js"



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
          sourceMapFilename: "public/css/<%= pkg.name.toLowerCase() %>.css.map"

        files:
          "public/css/<%= pkg.name.toLowerCase() %>.css": "public/less/<%= pkg.name.toLowerCase() %>.less"

      backend:
        options:
          strictMath: true
          sourceMap: true
          outputSourceFiles: true
          sourceMapURL: "backend.css.map"
          sourceMapFilename: "public/css/backend.css.map"

        files:
          "public/css/backend.css": "public/less/backend.less"

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
        "public/css/backend.css"
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

  grunt.registerTask "dev", [
    "clean:dev"
    "less:compileCore"
    "less:compileTheme"
    "less:compileCustom"
    "less:backend"
    "concat"
  ]

  grunt.registerTask "default", [
    "dev"
    "watch"
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
