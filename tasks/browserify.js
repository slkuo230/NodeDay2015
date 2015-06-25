'use strict';


module.exports = function browserify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-browserify');

	// Options
	return {
		build: {
			files: {
				'.build/js/bundle.js': ['dist/public/js/app.js'],
			},
			options: {}
		}
	};
};
