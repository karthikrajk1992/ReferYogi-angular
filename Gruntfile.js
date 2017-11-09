// Grunt tasks

module.exports = function (grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
		'* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
		'* @author <%= pkg.author %>\n' +
		'*/\n',

		clean: {
			dist: ['src']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			app: {
				src: ['app/modules/**/*.js']
			}
		},

		exec: {
			bowerInstaller: 'bower-installer'
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true,
				separator: ';',
			},
			build: {
				src: [
					// Angular Project Dependencies,
					"src/bower_components/jquery/dist/jquery.min.js",
					"src/bower_components/es5-shim/es5-shim.min.js",
					"src/bower_components/json3/lib/json3.min.js",
					"src/bower_components/bootstrap/dist/js/bootstrap..min.js",
					"src/bower_components/angular/angular.min.js",
					"src/bower_components/angular-touch/angular-touch.min.js",
					"src/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
					"src/bower_components/angular-aria/angular-aria.min.js",
					"src/bower_components/angular-mocks/angular-mocks.min.js",
					"src/bower_components/angular-cookies/angular-cookies.min.js",
					"src/bower_components/angular-animate/angular-animate.min.js",
					"src/bower_components/angular-sanitize/angular-sanitize.min.js",
					"src/bower_components/angular-resource/angular-resource.min.js",
					"src/bower_components/angular-ui-router/release/angular-ui-router.min.js",
					"src/bower_components/angular-update-meta/dist/update-meta.min.js",
					'app/app.js',
					'app/app.config.js',
					'app/modules/**/*Module.js',
					'app/modules/**/*Route.js',
					'app/modules/**/*Ctrl.js',
					'app/modules/**/*Service.js',
					'app/modules/shared/**/*.js',
					'app/modules/**/*Directive.js',
					'app/assets/**/templates.js'

				],
				dest: 'app/assets/js/<%= pkg.name %>-compressed.js'
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'

			},
			base: {
				src: 'app/assets/js/<%= pkg.name %>-compressed.js',
				dest: 'app/assets/js/<%= pkg.name %>-compressed.js'
			},

		},

		connect: {
			server: {
				options: {
					keepalive: true,
					port: 4000,
					base: '.',
					hostname: 'localhost',
					debug: true,
					livereload: true,
					open: true
				}
			}
		},
		concurrent: {
			tasks: ['connect', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},

		watch: {
			app: {
				files: '<%= jshint.app.src %>',
				tasks: ['jshint:app'],
				options: {
					livereload: true
				}
			}
		},

		injector: {
			options: {},
			dev: {
				files: {
					'index.html': [
						'bower.json',
						'app/app.js',
						'app/app.config.js',
						'app/**/*Module.js',
						'app/**/*Route.js',
						'app/**/*Ctrl.js',
						'app/**/*Service.js',
						'app/modules/shared/**/*.js',
						'app/**/*Directive.js'
					]
				}
			},
			production: {
				files: {
					'index.html': [
						'app/assets/css/**/*.css',
						'app/assets/js/<%= pkg.name %>-compressed.js'
					]

				}
			}
		},

		ngtemplates: {
			app: {
				src: 'app/modules/**/*.html',
				dest: 'app/assets/js/templates.js',
				options: {
					module: '<%= pkg.name %>',
					root: 'app/',
					standAlone: false
				}
			}
		}



	});

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project if something fail.
	grunt.option('force', true);

	// Register grunt tasks
	grunt.registerTask("build", [
		"jshint",
		"exec",
		"concat",
		"ngtemplates",
		// "uglify",
		"injector:production",
		"concurrent",
		"clean"
	]);

	// Development task(s).
	grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
